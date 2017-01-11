$(document).ready(function() {
  var target = document.getElementById("chatbox");
  var config = {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  };
  observer.observe(target, config);
});

var observer = new MutationObserver(function(mutationRecords, observer) {
  // Compute sum of the heights of added Nodes
    var newNodesHeight = mutationRecords.reduce(function(sum, mutation) {
        return sum + [].slice.call(mutation.addedNodes)
          .map(function (node) { return node.scrollHeight || 0; })
          .reduce(function(sum, height) {return sum + height});
    }, 0);
    // Scroll to bottom if it was already scrolled to bottom
    if (scrollContainer.clientHeight + scrollContainer.scrollTop + newNodesHeight + 10 >= scrollContainer.scrollHeight) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
});
