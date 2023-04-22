function search() {
    // get the search value from the input field
    let searchValue = document.getElementById("text-to-search").value;
    // create a regular expression object to match the search value
    let regex = new RegExp(searchValue, "gi");
    // get all the text nodes under paragraphs and headings
    let allTextNodes = document.evaluate("//p//text() | //h1//text() | //h2//text() | //h3//text() | //h4//text() | //h5//text() | //h6//text()", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    // loop through each text node and highlight the matching text
    for (let i = 0; i < allTextNodes.snapshotLength; i++) {
      let textNode = allTextNodes.snapshotItem(i);
      if (textNode.nodeType === Node.TEXT_NODE) {
        let match = textNode.nodeValue.match(regex);
        if (match) {
          let highlightedText = textNode.nodeValue.replace(regex, '<mark class="highlighted">' + match[0] + "</mark>");
          let span = document.createElement("span");
          span.innerHTML = highlightedText;
          textNode.parentNode.replaceChild(span, textNode);
        }
      }
    }
  }

  