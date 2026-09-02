/**
 * Interactive Demos: MLOps Canary Visualizer & ML Freight Estimator
 * Gobikrishna P - Portfolio
 */

(function () {
  // --------------------------------------------------------------------------
  // Demo 1: MLOps Canary Traffic Visualizer
  // --------------------------------------------------------------------------
  let blueWeight = 100;
  let greenWeight = 0;
  let totalRequests = 1420;
  let trafficInterval = null;

  function updateCanaryUI() {
    const blueEl = document.getElementById('canary-blue-weight');
    const greenEl = document.getElementById('canary-green-weight');
    const blueBar = document.getElementById('canary-blue-bar');
    const greenBar = document.getElementById('canary-green-bar');
    const slider = document.getElementById('canary-slider');
    const statusText = document.getElementById('canary-status-text');

    if (blueEl) blueEl.textContent = `${blueWeight}%`;
    if (greenEl) greenEl.textContent = `${greenWeight}%`;
    if (blueBar) blueBar.style.width = `${blueWeight}%`;
    if (greenBar) greenBar.style.width = `${greenWeight}%`;
    if (slider) slider.value = greenWeight;

    if (statusText) {
      if (greenWeight === 0) {
        statusText.innerHTML = '<span class="text-indigo-400 font-semibold">Baseline v1.2 (100% Production Traffic)</span>';
      } else if (greenWeight < 30) {
        statusText.innerHTML = '<span class="text-amber-400 font-semibold">Canary Evaluation Active (Evaluating latency & 0.00% error rate on v2.0)</span>';
      } else if (greenWeight < 100) {
        statusText.innerHTML = '<span class="text-cyan-400 font-semibold">Staged Multi-AZ Rollout (Weighted traffic split 70/20/10)</span>';
      } else {
        statusText.innerHTML = '<span class="text-emerald-400 font-semibold">Full Promotion (v2.0 promoted to 100% Production Traffic)</span>';
      }
    }
  }

  window.setCanaryPreset = function (pct) {
    greenWeight = pct;
    blueWeight = 100 - pct;
    updateCanaryUI();
    logCanary(`ALB listener rule adjusted: Blue=${blueWeight}%, Green=${greenWeight}%`);
  };

  window.onCanarySliderChange = function (val) {
    greenWeight = parseInt(val, 10);
    blueWeight = 100 - greenWeight;
    updateCanaryUI();
  };

  function logCanary(msg) {
    const log = document.getElementById('canary-terminal-log');
    if (!log) return;

    const time = new Date().toTimeString().split(' ')[0];
    const item = document.createElement('div');
    item.className = 'text-xs font-mono text-slate-400 leading-relaxed';
    item.innerHTML = `<span class="text-indigo-400 font-semibold">[${time}]</span> <span class="text-emerald-400 font-semibold">INFO</span> ${msg}`;
    
    log.appendChild(item);
    if (log.children.length > 8) {
      log.removeChild(log.children[0]);
    }
    log.scrollTop = log.scrollHeight;
  }

  function simulateTraffic() {
    totalRequests += Math.floor(Math.random() * 4) + 1;
    const reqCounter = document.getElementById('canary-req-counter');
    if (reqCounter) reqCounter.textContent = totalRequests.toLocaleString();

    if (Math.random() < 0.35) {
      const isGreen = Math.random() * 100 < greenWeight;
      const target = isGreen ? 'ECS-Cluster-Green (v2.0)' : 'ECS-Cluster-Blue (v1.2)';
      const lat = isGreen ? (17 + Math.random() * 3).toFixed(1) : (24 + Math.random() * 4).toFixed(1);
      const tenantId = `tenant_${Math.floor(Math.random() * 5) + 1}`;
      logCanary(`Request [${tenantId}] routed to ${target} • Latency: ${lat}ms • Status: 200 OK`);
    }
  }

  // --------------------------------------------------------------------------
  // Demo 2: ML Freight Delivery Cost Estimator (Scikit-Learn Regression)
  // --------------------------------------------------------------------------
  window.calculateFreightCost = function () {
    const weightEl = document.getElementById('freight-weight');
    const distEl = document.getElementById('freight-distance');
    const carrierEl = document.getElementById('freight-carrier');
    const fuelEl = document.getElementById('freight-fuel');

    const weightVal = document.getElementById('freight-weight-val');
    const distVal = document.getElementById('freight-distance-val');
    const fuelVal = document.getElementById('freight-fuel-val');
    const costUsd = document.getElementById('freight-cost-usd');
    const costInr = document.getElementById('freight-cost-inr');
    const confMin = document.getElementById('freight-conf-min');
    const confMax = document.getElementById('freight-conf-max');

    if (!weightEl || !distEl || !carrierEl || !fuelEl) return;

    const w = parseFloat(weightEl.value);
    const d = parseFloat(distEl.value);
    const c = parseFloat(carrierEl.value);
    const f = parseFloat(fuelEl.value);

    if (weightVal) weightVal.textContent = `${w.toLocaleString()} kg`;
    if (distVal) distVal.textContent = `${d.toLocaleString()} km`;
    if (fuelVal) fuelVal.textContent = `${f.toFixed(2)}x`;

    // Mathematical formula mimicking the trained regression model weights
    const base = (42.5 + (w * 0.185) + (d * 0.245) + ((w * d) / 100000 * 0.08)) * c * f;
    const margin = base * 0.0412; // Corresponding to model RMSE 0.0412
    const minP = Math.max(20, base - margin);
    const maxP = base + margin;
    const inrRate = 86.5;

    if (costUsd) costUsd.textContent = `$${base.toFixed(2)}`;
    if (costInr) costInr.textContent = `₹${(base * inrRate).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    if (confMin) confMin.textContent = `$${minP.toFixed(2)}`;
    if (confMax) confMax.textContent = `$${maxP.toFixed(2)}`;
  };

  // Switch between demo tabs
  window.switchDemoTab = function (tabName) {
    const cTab = document.getElementById('demo-content-canary');
    const fTab = document.getElementById('demo-content-freight');
    const bCanary = document.getElementById('btn-tab-canary');
    const bFreight = document.getElementById('btn-tab-freight');

    if (tabName === 'canary') {
      if (cTab) cTab.classList.remove('hidden');
      if (fTab) fTab.classList.add('hidden');
      if (bCanary) {
        bCanary.className = 'px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer';
      }
      if (bFreight) {
        bFreight.className = 'px-5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all cursor-pointer';
      }
    } else {
      if (cTab) cTab.classList.add('hidden');
      if (fTab) fTab.classList.remove('hidden');
      if (bFreight) {
        bFreight.className = 'px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer';
      }
      if (bCanary) {
        bCanary.className = 'px-5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all cursor-pointer';
      }
      window.calculateFreightCost();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    updateCanaryUI();
    if (!trafficInterval) {
      trafficInterval = setInterval(simulateTraffic, 1500);
    }
    window.calculateFreightCost();
  });
})();
