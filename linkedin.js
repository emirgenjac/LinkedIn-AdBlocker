(function() {
    function removeAds() {
        console.log("removeAds function executed");
        const spans = document.querySelectorAll("span");


        spans.forEach(span => {
            if (span.textContent.includes("Promoted")) {
                span.parentElement.parentElement.parentElement.remove()
                
            }
        });
    }
   
    const observer = new MutationObserver(removeAds);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    removeAds();
})();
