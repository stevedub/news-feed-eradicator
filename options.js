// Saves options to chrome.storage
function save_options() {

  
  var monday = document.getElementById('monday').checked;
  var tuesday = document.getElementById('tuesday').checked;
  var wednesday = document.getElementById('wednesday').checked;
  var thursday = document.getElementById('thursday').checked;
  var friday = document.getElementById('friday').checked;
  var saturday = document.getElementById('saturday').checked;
  var sunday = document.getElementById('sunday').checked;
  chrome.storage.sync.set({

    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday,
    sunday: sunday
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({

    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday,
    sunday: sunday
  }, function(items) {

    document.getElementById('monday').checked = items.monday;
    document.getElementById('tuesday').checked = items.tuesday;
    document.getElementById('wednesday').checked = items.wednesday;
    document.getElementById('thursday').checked = items.thursday;
    document.getElementById('friday').checked = items.friday;
    document.getElementById('saturday').checked = items.saturday;
    document.getElementById('sunday').checked = items.sunday;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);