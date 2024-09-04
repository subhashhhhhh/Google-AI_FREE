chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return new Promise((resolve) => {
        chrome.storage.sync.get('enabled', function(data) {
          if (data.enabled !== false) {
            let url = new URL(details.url);
            if (url.hostname === "www.google.com" && url.pathname === "/search") {
              if (!url.searchParams.has("udm")) {
                url.searchParams.append("udm", "14");
                resolve({ redirectUrl: url.toString() });
              }
            }
          }
          resolve({});
        });
      });
    },
    { urls: ["*://www.google.com/search*"] },
    ["blocking"]
  );
  