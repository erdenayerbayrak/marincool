const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };

  const runnerResult = await lighthouse('http://localhost:3000', options);

  // Sonuçları yazdır
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score:', runnerResult.lhr.categories.performance.score * 100);
  console.log('Accessibility score:', runnerResult.lhr.categories.accessibility.score * 100);
  console.log('Best Practices score:', runnerResult.lhr.categories['best-practices'].score * 100);
  console.log('SEO score:', runnerResult.lhr.categories.seo.score * 100);

  await chrome.kill();
}

runLighthouse();