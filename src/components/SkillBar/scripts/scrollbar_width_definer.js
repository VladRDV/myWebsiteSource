const getScrollbarWidth = () => {
    if((typeof window !== 'undefined') && (document.body !== null)){
        let outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);
        
        let widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";
        
        // add innerdiv
        let inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);        
        
        let widthWithScroll = inner.offsetWidth;
        
        // remove divs
        outer.parentNode.removeChild(outer);
        
        return widthNoScroll - widthWithScroll;
    }
}

export default getScrollbarWidth;


// let outside = document.createElement("div");
// let inside = document.createElement("div");
// outside.style.width = inside.style.width = "100%";
// outside.style.overflow = "scroll";
// document.body.appendChild(outside).appendChild(inside);
// let scrollbar = outside.offsetWidth-inside.offsetWidth;
// outside.parentNode.removeChild(outside);
// alert(scrollbar);



// If you're using this on a Windows (metro) App, make sure you set the -ms-overflow-style property of the 'outer' div to scrollbar, otherwise the width will not be correctly detected. (code updated)


// This will not work on Mac OS with the default "Only show scrollbars when scrolling" setting (Yosemite and up).
// can try to make height 0 && opacity 0 div, and try force to scroll  