import assert from "node:assert/strict";
import { access, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
let worker;

async function getWorker() {
  if (!worker) {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
    worker = (await import(workerUrl.href)).default;
  }
  return worker;
}

async function render(pathname) {
  const app = await getWorker();
  return app.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Tyro homepage with production metadata", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /<title>Tyro Tyres/);
  assert.match(html, /ENGINEERED/);
  assert.match(html, /Private-label tyre manufacturer/);
  assert.doesNotMatch(html, /vinext-starter|Building your site|react-loading-skeleton/i);
});

test("renders a complete product page and structured data", async () => {
  const response = await render("/products/tbr-10-00r20");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /10\.00R20/);
  assert.match(html, /TYRO/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Technical PDF/);
});

test("publishes all product datasheets without duplicate output artifacts", async () => {
  const files = await readdir(new URL("../public/datasheets/", import.meta.url));
  assert.equal(files.filter((file) => file.endsWith(".pdf")).length, 50);
  await access(new URL("../public/datasheets/tbr-10-00r20.pdf", import.meta.url));
  await assert.rejects(access(new URL("output/pdf/datasheets", projectRoot)));
});

test("exposes the complete catalogue in the sitemap", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();

  assert.equal(response.status, 200);
  assert.equal((xml.match(/<url>/g) ?? []).length, 55);
  assert.match(xml, /products\/tbr-10-00r20/);
  assert.match(xml, /products\/agri-16-9-28/);
});
