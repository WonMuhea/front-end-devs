'use client'
import {useEffect, useRef} from 'react'

const useTradingView = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {

    const containerRef = useRef<HTMLDivElement|null>(null);

    useEffect(
        () => {
            if(!containerRef.current) return
            if(containerRef.current.dataset.loaded) return;
            const currentElem = containerRef.current;
            currentElem.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%; height:${height}px;"></div>`
            const script = document.createElement("script");
            script.src = scriptUrl;
            script.async = true;
            script.text = JSON.stringify(config)
            currentElem.appendChild(script);
            currentElem.dataset.loaded = 'true'
            return () => {
                if(currentElem) {
                    currentElem.innerHTML = '';
                    delete currentElem.dataset.loaded
                }
            }
        },
        [scriptUrl, height, config]

    );
    return containerRef;
}
export default useTradingView
