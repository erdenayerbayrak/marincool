// Development tool to find elements causing horizontal overflow
// Run this in browser console: copy and paste the function below

function findOverflowElements() {
  console.log('🔍 Scanning for overflow elements...');
  
  const elements = Array.from(document.querySelectorAll('*'));
  const overflowElements: Array<{element: Element, width: number, screenWidth: number}> = [];
  
  const screenWidth = document.documentElement.clientWidth;
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(el);
    
    // Check if element extends beyond screen width
    if (rect.right > screenWidth || rect.width > screenWidth) {
      overflowElements.push({
        element: el,
        width: rect.width,
        screenWidth: screenWidth
      });
      
      // Highlight the problematic element
      (el as HTMLElement).style.outline = '2px solid red';
      (el as HTMLElement).style.outlineOffset = '2px';
      
      console.log('🚨 OVERFLOW ELEMENT:', {
        element: el,
        tagName: el.tagName,
        className: el.className,
        id: el.id,
        elementWidth: Math.round(rect.width),
        screenWidth: screenWidth,
        overflow: Math.round(rect.width - screenWidth),
        position: computedStyle.position,
        display: computedStyle.display,
        boxSizing: computedStyle.boxSizing
      });
    }
  });
  
  if (overflowElements.length === 0) {
    console.log('✅ No overflow elements found!');
  } else {
    console.log(`❌ Found ${overflowElements.length} overflow elements. Check console for details.`);
    console.log('💡 To remove highlights, run: clearOverflowHighlights()');
  }
  
  return overflowElements;
}

function clearOverflowHighlights() {
  Array.from(document.querySelectorAll('*')).forEach(el => {
    (el as HTMLElement).style.outline = '';
    (el as HTMLElement).style.outlineOffset = '';
  });
  console.log('✨ Highlights cleared');
}

// Export for use in development
if (typeof window !== 'undefined') {
  (window as any).findOverflowElements = findOverflowElements;
  (window as any).clearOverflowHighlights = clearOverflowHighlights;
}

export { findOverflowElements, clearOverflowHighlights };