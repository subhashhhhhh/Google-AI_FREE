document.addEventListener('DOMContentLoaded', function() {
  const toggleExtension = document.getElementById('toggle-extension');

  browser.storage.sync.get('enabled').then((data) => {
    toggleExtension.checked = data.enabled !== false; 
  });

  toggleExtension.addEventListener('change', function() {
    const enabled = toggleExtension.checked;
    browser.storage.sync.set({ enabled: enabled }).then(() => {
      updateIcon(enabled);
    });
  });

  function updateIcon(enabled) {
    const iconPath = enabled ? '../common/icons/icon' : '../common/icons/icon-grey';
    browserAPI.action.setIcon({
      path: {
        "48": `${iconPath}48.png`,
        "128": `${iconPath}128.png`
      }
    });
  }
});
