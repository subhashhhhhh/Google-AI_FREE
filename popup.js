document.addEventListener('DOMContentLoaded', function() {
    const toggleExtension = document.getElementById('toggle-extension');
  
    chrome.storage.sync.get('enabled', function(data) {
      toggleExtension.checked = data.enabled !== false;
    });
  
    toggleExtension.addEventListener('change', function() {
      const enabled = toggleExtension.checked;
      chrome.storage.sync.set({ enabled: enabled }, function() {
        updateIcon(enabled);
      });
    });
  
    function updateIcon(enabled) {
      const iconPath = enabled ? 'icons/icon' : 'icons/icon-grey';
      chrome.action.setIcon({
        path: {
          "48": `${iconPath}48.png`,
          "128": `${iconPath}128.png`
        }
      });
    }
  });
  