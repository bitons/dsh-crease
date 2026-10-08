// 折痕 · 隐墨 v0.12.3 — DOM-only, zero-build client bundle. See DIAGNOSIS.md.
window.__ModuleLoader__.load({
  id: 'dsh-crease',
  factory: function (require) {
    'use strict'
    var module = { exports: {} }
    var exports = module.exports

    var VERSION = '0.12.3'
    var STYLE_ID = 'dsh-crease-style'
    var LS_KEY = 'dsh.crease.v3'
    var LS_DIAG = 'dsh.crease.diag'
    var SEL = {
      scroll: '[data-conversation-scroll]',
      row: '[data-chat-anchor-key]',
      streaming: '[data-streaming]:not([data-streaming="false"]):not([data-streaming="0"])',
      scene: '[data-dsh-crease-body]'
    }
    var A = {
      grip: 'data-dsh-crease-grip',
      marquee: 'data-dsh-crease-marquee',
      rowBar: 'data-dsh-crease-row',
      rowHidden: 'data-dsh-crease-hidrow',
      body: 'data-dsh-crease-body',
      id: 'data-crease-id',
      label: 'data-crease-label',
      meta: 'data-crease-meta',
      open: 'data-crease-open'
    }
    var WHALE_D = 'M23.0584 4.95203C22.8129 4.83203 22.7074 5.06103 22.5639 5.17704C22.5149 5.21454 22.4734 5.26354 22.4319 5.30854C22.0734 5.69155 21.6543 5.94306 21.1073 5.91306C20.3073 5.86806 19.6243 6.11957 19.0203 6.73158C18.8918 5.97706 18.4652 5.52655 17.8162 5.23754C17.4767 5.08753 17.1332 4.93703 16.8952 4.61052C16.7292 4.37801 16.6837 4.11901 16.6007 3.8635C16.5477 3.70949 16.4952 3.55199 16.3177 3.52549C16.1252 3.49549 16.0497 3.65699 15.9742 3.792C15.6722 4.34401 15.5552 4.95203 15.5667 5.56805C15.5932 6.95359 16.1782 8.05712 17.3407 8.84215C17.4727 8.93215 17.5067 9.02215 17.4652 9.15366C17.3857 9.42416 17.2917 9.68667 17.2087 9.95718C17.1557 10.1297 17.0767 10.1677 16.8917 10.0922C16.2537 9.82568 15.7027 9.43117 15.2156 8.95465C14.3891 8.15513 13.6416 7.2726 12.7096 6.58158C12.4906 6.42007 12.2716 6.27007 12.045 6.12707C11.094 5.20354 12.1696 4.44502 12.4186 4.35501C12.6791 4.26101 12.5091 3.938 11.6675 3.942C10.826 3.9455 10.056 4.22751 9.07446 4.60302C8.93096 4.65952 8.77995 4.70052 8.62545 4.73452C7.73492 4.56552 6.80989 4.52802 5.84386 4.63702C4.02481 4.83953 2.57177 5.69955 1.50373 7.1676C0.220694 8.93215 -0.0813148 10.9372 0.288196 13.0283C0.676708 15.2323 1.80174 17.0569 3.53029 18.4834C5.32285 19.9625 7.38741 20.6875 9.74298 20.5485C11.1735 20.466 12.7661 20.2745 14.5626 18.7539C15.0156 18.9795 15.4912 19.0695 16.2797 19.137C16.8872 19.1935 17.4722 19.107 17.9252 19.013C18.6347 18.8629 18.5857 18.2059 18.3292 18.0854C16.2497 17.1169 16.7062 17.5109 16.2912 17.1919C17.3477 15.9419 18.9618 13.7198 19.4598 10.6942C19.5088 10.3602 19.5713 9.88968 19.5638 9.61917C19.5598 9.45417 19.5978 9.39016 19.7863 9.37116C20.3073 9.31116 20.8128 9.16866 21.2773 8.91315C22.6249 8.17713 23.1684 6.96809 23.2964 5.51905C23.3154 5.29754 23.2924 5.06853 23.0584 4.95203ZM11.3165 17.9954C9.30097 16.4109 8.32344 15.8894 7.91992 15.9119C7.54241 15.9344 7.61042 16.3664 7.69342 16.6479C7.78042 16.9259 7.89342 17.1174 8.05193 17.3614C8.16143 17.5229 8.23694 17.7629 7.94243 17.9434C7.29341 18.3449 6.16487 17.8084 6.11187 17.7819C4.79833 17.0084 3.7003 15.9874 2.92628 14.5908C2.17875 13.2468 1.74474 11.8047 1.67324 10.2657C1.65424 9.89418 1.76374 9.76267 2.13375 9.69517C2.62077 9.60517 3.12278 9.58617 3.6093 9.65767C5.66636 9.95818 7.41741 10.8777 8.88545 12.3348C9.72348 13.1643 10.3575 14.1558 11.0105 15.1243C11.705 16.1529 12.4521 17.1329 13.4036 17.9364C13.7396 18.2179 14.0076 18.4319 14.2641 18.5899C13.4906 18.6764 12.1996 18.6949 11.3165 17.9964V17.9954ZM12.2826 11.7817C12.2826 11.6167 12.4146 11.4852 12.5806 11.4852C12.6181 11.4852 12.6521 11.4927 12.6826 11.5037C12.7241 11.5187 12.7621 11.5412 12.7921 11.5752C12.8451 11.6277 12.8751 11.7027 12.8751 11.7817C12.8751 11.9467 12.7431 12.0782 12.5771 12.0782C12.4111 12.0782 12.2826 11.9467 12.2826 11.7817ZM15.2831 13.3208C15.0906 13.3998 14.8981 13.4673 14.7131 13.4748C14.4261 13.4898 14.1131 13.3733 13.9431 13.2308C13.6791 13.0093 13.4901 12.8853 13.4111 12.4988C13.3771 12.3338 13.3961 12.0782 13.4261 11.9317C13.4941 11.6162 13.4186 11.4137 13.1961 11.2297C13.0151 11.0797 12.7846 11.0382 12.5316 11.0382C12.4371 11.0382 12.3506 10.9967 12.2861 10.9632C12.1806 10.9107 12.0936 10.7792 12.1766 10.6177C12.2031 10.5652 12.3316 10.4377 12.3616 10.4152C12.7051 10.2197 13.1011 10.2837 13.4676 10.4302C13.8071 10.5692 14.0641 10.8242 14.4336 11.1847C14.8111 11.6202 14.8791 11.7402 15.0941 12.0672C15.2641 12.3228 15.4186 12.5853 15.5247 12.8858C15.5887 13.0733 15.5057 13.2268 15.2831 13.3208Z'
    var STYLE_DEFAULTS = { regionColor:'#3b82f6', regionOpacity:4, inkOpacity:10, regionPadLeft:16, regionPadRight:-6, regionPadY:6, regionRadius:6 }
    var DEF = Object.assign({},STYLE_DEFAULTS,{ labelChars: 12, minDrag: 8, zone: 44, speed: 14, gripPos: null })

    /* ================= 工具 ================= */
    function q(sel, root) { try { return (root || document).querySelector(sel) } catch (e) { return null } }
    function qa(sel, root) { try { return Array.prototype.slice.call((root || document).querySelectorAll(sel)) } catch (e) { return [] } }
    function make(tag, attrs, txt) {
      var el = document.createElement(tag)
      if (attrs) { for (var k in attrs) { if (Object.prototype.hasOwnProperty.call(attrs, k) && attrs[k] !== undefined && attrs[k] !== null) el.setAttribute(k, String(attrs[k])) } }
      if (txt !== undefined) el.textContent = String(txt)
      return el
    }
    function whaleSvg(size) {
      var NS = 'http://www.w3.org/2000/svg'
      var svg = document.createElementNS(NS, 'svg')
      svg.setAttribute('viewBox', '0 0 24 24')
      svg.setAttribute('fill', 'none')
      if (size) { svg.setAttribute('width', String(size)); svg.setAttribute('height', String(size)) }
      var p = document.createElementNS(NS, 'path')
      p.setAttribute('fill', 'currentColor')
      p.setAttribute('d', WHALE_D)
      svg.appendChild(p)
      return svg
    }
    function clamp(v, a, b) { return v < a ? a : (v > b ? b : v) }
    function uid() { return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6) }
    function attrEsc(v) { return String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"') }
    function rowSel(key) { return '[data-chat-anchor-key="' + attrEsc(key) + '"]' }
    function overlaps(a, b) { return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top }
    function ensureStyle() {
      var st = document.getElementById(STYLE_ID) || document.createElement('style')
      st.setAttribute('data-dsh-crease-version', VERSION)
      var icon = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4D6BFE" d="' + WHALE_D + '"/></svg>') + '")'
      var closeIcon = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m5 5 6 6m0-6-6 6" fill="none" stroke="#8c97aa" stroke-width="1.2" stroke-linecap="round"/></svg>') + '")'
      st.id = STYLE_ID
      st.textContent = [
        '[data-dsh-crease-grip]{position:fixed;right:20px;bottom:20px;z-index:1200;display:flex;align-items:center;justify-content:center;',
        '  width:34px;height:34px;padding:0;border:1px solid color-mix(in srgb,var(--dsw-alias-brand-primary,#4D6BFE) 35%,transparent);',
        '  border-radius:50%;background:color-mix(in srgb,var(--dsw-alias-brand-primary,#4D6BFE) 12%,var(--dsw-alias-bg-layer-2,#fff));',
        '  color:var(--dsw-alias-brand-primary,#4D6BFE);box-shadow:var(--dsw-shadow-lv2,0 2px 8px rgba(0,0,0,.16));cursor:grab;',
        '  transition:transform .12s ease;user-select:none;touch-action:none}',
        '[data-dsh-crease-grip]:hover{transform:scale(1.06)}',
        '[data-dsh-crease-grip][data-moving]{cursor:grabbing;transform:scale(.96);opacity:.85}',
        '[data-dsh-crease-grip][data-armed]{background:var(--dsw-alias-brand-primary,#4D6BFE);color:#fff;cursor:crosshair;',
        '  box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-brand-primary,#4D6BFE) 22%,transparent)}',
        '[data-dsh-crease-grip] svg{width:19px;height:19px;pointer-events:none}',
        'html[data-dsh-crease-armed] [data-conversation-scroll]{cursor:crosshair}',
        '[data-dsh-crease-marquee]{position:fixed;inset:0;z-index:1199;pointer-events:none}',
        '[data-dsh-crease-marquee]>i{position:absolute;border-radius:3px;background:color-mix(in srgb,' + settings.regionColor + ' 10%,transparent);box-shadow:inset 2px 0 color-mix(in srgb,' + settings.regionColor + ' 45%,transparent)}',
        '[data-dsh-ink]{border-radius:3px;padding:0 2px;margin:0 -2px;box-decoration-break:clone;-webkit-box-decoration-break:clone;cursor:pointer;',
        'background:color-mix(in srgb,var(--dsh-ink-color,#3b82f6) var(--dsh-ink-opacity,10%),transparent);transition:background-color .14s ease}',
        '[data-dsh-ink][data-ink-open="0"]{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important;text-decoration:none!important;user-select:none!important}',
        '[data-dsh-ink][data-ink-open="1"]{background:color-mix(in srgb,var(--dsh-ink-color,#3b82f6) 3%,transparent)}',
        '[data-dsh-ink]:hover{background:color-mix(in srgb,var(--dsh-ink-color,#3b82f6) calc(var(--dsh-ink-opacity,10%) + 4%),transparent)}',
        '[data-dsh-ink]:focus-visible{outline:1px solid var(--dsh-ink-color,#3b82f6);outline-offset:2px}',
        '[data-dsh-ink-action]{position:fixed;z-index:1201;border:1px solid #3b82f622;border-radius:7px;padding:5px 11px;font:12px/20px system-ui,sans-serif;',
        'color:var(--dsw-alias-label-primary,#355581);background:var(--dsw-alias-bg-base,#fff);box-shadow:0 2px 12px #182e5012;cursor:pointer}',
        '[data-dsh-crease-line-control]{display:block!important;width:100%!important;min-width:0!important;padding:0!important;margin:3px 0!important;border:0!important;background:transparent!important;text-align:left!important}',
        '[data-dsh-crease-line-control][data-crease-open="1"]::before{margin-bottom:0!important}',
        '@media(prefers-reduced-motion:reduce){[data-dsh-ink]{transition:none}}',
        '[data-dsh-crease-toast]{position:fixed;left:50%;bottom:76px;transform:translateX(-50%);z-index:1300;max-width:70vw;padding:7px 12px;',
        '  border-radius:10px;background:var(--dsw-alias-bg-layer-2,#2c2c2e);color:var(--dsw-alias-label-primary,#111);',
        '  border:1px solid color-mix(in srgb,var(--dsw-alias-brand-primary,#4D6BFE) 30%,transparent);box-shadow:var(--dsw-shadow-lv3);',
        '  font-size:12px;line-height:18px}',
        '[data-dsh-crease-row]{--crease-ink:var(--dsw-alias-label-secondary,#637082);',
        '  --crease-edge:color-mix(in srgb,var(--dsw-alias-label-secondary,#637082) 18%,transparent);',
        '  --crease-shadow:color-mix(in srgb,var(--dsw-alias-label-secondary,#637082) 7%,transparent);',
        '  position:relative!important;box-sizing:border-box!important;opacity:1!important;visibility:visible!important;',
        '  max-width:100%!important;isolation:isolate;}',
        '[data-dsh-crease-row]::before{content:attr(data-crease-label) "…"!important;',
        '  display:block!important;position:relative!important;box-sizing:border-box!important;width:100%!important;',
        '  height:32px!important;min-height:32px!important;padding:0 112px 6px 24px!important;margin:0!important;',
        '  font:400 12px/25px system-ui,sans-serif!important;color:var(--crease-ink)!important;',
        '  background-color:transparent!important;',
        '  background-image:' + icon + ',linear-gradient(90deg,transparent,var(--crease-edge) 9%,var(--crease-edge) 86%,transparent),',
        '  linear-gradient(90deg,transparent,color-mix(in srgb,var(--dsw-alias-bg-base,#fff) 88%,transparent) 9%,color-mix(in srgb,var(--dsw-alias-bg-base,#fff) 88%,transparent) 86%,transparent),',
        '  radial-gradient(ellipse at 50% 0,var(--crease-shadow),transparent 72%),',
        '  linear-gradient(164deg,transparent 44%,var(--crease-edge) 48%,var(--dsw-alias-bg-base,#fff) 52%,transparent 57%)!important;',
        '  background-position:1px 5px,0 25px,0 26px,50% 27px,84% 22px!important;',
        '  background-size:14px 14px,100% 1px,100% 1px,88% 3px,18px 4px!important;background-repeat:no-repeat!important;',
        '  border:0!important;border-radius:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;',
        '  text-align:left!important;text-indent:0!important;letter-spacing:.02em!important;opacity:1!important;visibility:visible!important;cursor:pointer;',
        '  transition:color .16s ease!important}',
        '[data-dsh-crease-row]::after{content:attr(data-crease-meta)!important;position:absolute!important;display:block!important;',
        '  box-sizing:border-box!important;top:0!important;left:calc(100% - 108px)!important;right:auto!important;',
        '  width:104px!important;height:26px!important;margin:0!important;padding:0 23px 0 0!important;',
        '  font:400 11px/25px system-ui,sans-serif!important;font-variant-numeric:tabular-nums!important;text-align:right!important;white-space:nowrap!important;',
        '  color:var(--dsw-alias-label-tertiary,#929baa)!important;background:none!important;cursor:pointer}',
        '[data-dsh-crease-row]:is(:hover,:focus-visible)::after{content:attr(data-crease-meta) " · 展开"!important;',
        '  background-image:' + closeIcon + '!important;background-position:right center!important;background-size:16px 16px!important;background-repeat:no-repeat!important}',
        '[data-dsh-crease-row][data-crease-open="0"]{display:block!important;height:32px!important;min-height:32px!important;',
        '  max-height:32px!important;width:100%!important;overflow:hidden!important;font-size:0!important;line-height:0!important;',
        '  margin:3px 0!important;padding:0!important;border:0!important;background:transparent!important;flex-shrink:0!important}',
        '[data-dsh-crease-row][data-crease-open="0"]>*{display:none!important}',
        'span[data-dsh-crease-body][data-dsh-crease-row]{display:inline-block!important;width:100%!important;min-width:0!important;vertical-align:middle!important}',
        '[data-dsh-crease-row][data-crease-open="1"]{display:var(--dsh-crease-display,block)!important;height:auto!important;max-height:none!important;overflow:visible!important}',
        'span[data-dsh-crease-body][data-dsh-crease-row][data-crease-open="1"]{display:inline-block!important;width:auto!important;min-width:100%!important}',
        '[data-dsh-crease-row][data-crease-open="1"]::before{background-size:14px 14px,100% 1px,100% 1px,88% 1px,0 0!important}',
        '[data-dsh-crease-row][data-crease-open="1"]::after{content:attr(data-crease-meta) " · 收起"!important;top:var(--dsh-crease-pad-top,0px)!important;left:auto!important;right:calc(var(--dsh-crease-pad-right,0px) + 4px)!important}',
        '[data-dsh-crease-region-layer]{position:fixed;inset:0;width:100%;height:100%;z-index:1100;pointer-events:none;mix-blend-mode:multiply}',
        '[data-dsh-crease-region-layer][data-dark]{mix-blend-mode:screen}',
        '[data-dsh-crease-gear]{position:fixed;z-index:1199;display:flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;',
        '  border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:50%;',
        '  background:color-mix(in srgb,var(--dsw-alias-bg-layer-2,#fff) 90%,transparent);color:var(--dsw-alias-label-tertiary,#929baa);',
        '  box-shadow:var(--dsw-shadow-lv1,0 1px 4px rgba(0,0,0,.14));cursor:pointer;opacity:0;pointer-events:none;',
        '  transition:opacity .12s ease,color .12s ease}',
        '[data-dsh-crease-grip]:hover ~ [data-dsh-crease-gear],[data-dsh-crease-gear]:hover,[data-dsh-crease-gear]:focus-visible{opacity:.92;pointer-events:auto}',
        '[data-dsh-crease-gear]:hover{opacity:1;color:var(--dsw-alias-brand-primary,#4D6BFE)}',
        '[data-dsh-crease-settings]{box-sizing:border-box;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;z-index:1300;width:min(420px,calc(100vw - 32px));max-height:calc(100dvh - 40px);overflow:auto;padding:24px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:16px;',
        'background:var(--dsw-alias-bg-base,#fff);color:var(--dsw-alias-label-primary,#26303d);font:14px/1.6 system-ui,sans-serif;box-shadow:0 16px 64px #0002}',
        '[data-dsh-crease-settings]::backdrop{background:#0003}',
        '[data-dsh-crease-settings] h2{font:500 19px/1.5 system-ui,sans-serif;margin:0 0 4px}',
        '[data-dsh-crease-settings] p{margin:0 0 22px;color:var(--dsw-alias-label-secondary,#637082);font-size:12px}',
        '[data-dsh-crease-settings] label{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:18px 0 8px}',
        '[data-dsh-crease-settings] output{color:var(--dsw-alias-label-secondary,#637082);font-variant-numeric:tabular-nums}',
        '[data-dsh-crease-settings] input[type=range]{width:100%;accent-color:#3b82f6;margin:0}',
        '[data-dsh-crease-settings] .crease-color{display:flex;gap:10px;align-items:center}',
        '[data-dsh-crease-settings] input[type=color]{width:44px;height:36px;padding:2px;border:1px solid #8884;border-radius:7px;background:transparent}',
        '[data-dsh-crease-settings] input[type=text]{width:120px;padding:7px 10px;border:1px solid #8884;border-radius:7px;background:transparent;color:inherit;font:14px/20px ui-monospace,monospace}',
        '[data-dsh-crease-settings] footer{display:flex;justify-content:space-between;gap:12px;margin-top:24px}',
        '[data-dsh-crease-settings] button{font:inherit;border:1px solid #8884;border-radius:8px;padding:7px 14px;cursor:pointer;background:transparent;color:inherit}',
        '[data-dsh-crease-settings] [data-action=done]{background:#3b82f6;border-color:#3b82f6;color:white}',
        '[data-dsh-crease-row][data-crease-open="1"]::before{margin-bottom:8px!important}',
        '[data-dsh-crease-row][data-crease-open="1"]>:first-child{margin-top:0!important}',
        '[data-dsh-crease-row][data-crease-open="1"]>:last-child{margin-bottom:0!important}',
        'tr[data-dsh-crease-table-row="closed"]{border:0!important;background:transparent!important}',
        'tr[data-dsh-crease-table-row="closed"]>:not([data-dsh-crease-row]){display:none!important}',
        'tr[data-dsh-crease-table-row]>[data-dsh-crease-row]{display:table-cell!important;width:auto!important;max-width:none!important;vertical-align:top!important}',
        'table[data-dsh-crease-table="closed"]{border:0!important;background:transparent!important}',
        'table[data-dsh-crease-table="closed"] caption,table[data-dsh-crease-table="closed"] colgroup{display:none!important}',
        '[data-dsh-crease-hidrow]{display:none!important}',
        'li[data-dsh-crease-row][data-crease-open="0"]::marker{content:""!important}',
        'li[data-dsh-crease-row][data-crease-open="1"]{display:list-item!important}',
        '[data-dsh-crease-row]:hover::before{color:var(--dsw-alias-label-primary,#425272)!important}',
        '[data-dsh-crease-row]:focus-visible::before{outline:1px solid var(--dsw-alias-brand-primary,#4D6BFE);outline-offset:2px}',
        '@media(hover:none){[data-dsh-crease-row]::after{content:attr(data-crease-meta) " · 展开"!important;',
        'background-image:' + closeIcon + '!important;background-position:right center!important;background-size:16px 16px!important;background-repeat:no-repeat!important}',
        '[data-dsh-crease-row][data-crease-open="1"]::after{content:attr(data-crease-meta) " · 收起"!important}}',
        '@media(prefers-reduced-motion:reduce){[data-dsh-crease-row]::before{transition:none!important}}'
      ].join('')
      if (!st.isConnected) document.head.appendChild(st)
    }

    /* ================= 状态 ================= */
    var ctxRef = null
    var settings = Object.assign({}, DEF)
    var store = { sessions: {} }
    var dom = { grip: null, marquee: null, toast: null }
    var drag = null
    var gripDrag = null
    var armed = false
    var stickySession = null
    var applyTimer = null
    var observer = null
    var ticker = null
    var muted = false
    var lastStats = null
    var gestureTrace = []
    var settingsReturnFocus = true
    var activeSession = null
    var mounts = new Map()
    var regionFrame = null
    var selectionFrame = null
    var pendingInk = null
    var selectingText = false
    var inkPointer = null
    var shadowSheets = new Map()
    var listNumbers = new Map()
    var disposed = false
    var lastFoldDiag = null
    var suppressClickUntil = 0
    var suppressMenuUntil = 0
    var segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null

    function observe() {
      if (!observer || disposed) return
      var config = { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ['data-streaming', 'data-chat-anchor-key'] }
      observer.observe(document.body, config)
      rootsIn(scrollRoot()).forEach(function (r) { if (r !== document) observer.observe(r, config) })
    }
    function mutate(fn) {
      if (muted) return fn()
      if (observer) { if (observer.takeRecords().length) schedule(); observer.disconnect() }
      muted = true
      try { return fn() } finally { muted = false; observe() }
    }
    function toast(msg) {
      try {
        if (dom.toast) dom.toast.remove()
        var t = make('div', { 'data-dsh-crease-toast': '' }, msg)
        document.body.appendChild(t)
        dom.toast = t
        setTimeout(function () { if (dom.toast === t) { t.remove(); dom.toast = null } }, 2400)
      } catch (e) { }
    }
    function loadStore() {
      try {
        var raw = localStorage.getItem(LS_KEY)
        if (!raw) return
        var j = JSON.parse(raw)
        if (j && j.settings && typeof j.settings === 'object') { for (var k in j.settings) if (k in settings) settings[k] = j.settings[k] }
        if(j && j.settings && j.settings.regionPadX!==undefined){if(j.settings.regionPadLeft===undefined)settings.regionPadLeft=j.settings.regionPadX;if(j.settings.regionPadRight===undefined)settings.regionPadRight=j.settings.regionPadX}
        if (j && j.sessions && typeof j.sessions === 'object') store.sessions = j.sessions
      } catch (e) { }
      normalizeStyle()
    }
    function saveStore() { try { localStorage.setItem(LS_KEY, JSON.stringify({ settings: settings, sessions: store.sessions })) } catch (e) { } }
    function normalizeStyle() {
      if(!/^#[0-9a-f]{6}$/i.test(settings.regionColor || ''))settings.regionColor=STYLE_DEFAULTS.regionColor
      settings.regionColor=settings.regionColor.toLowerCase()
      // 旧版只有一个「左右外扩」字段，迁移成左右独立
      if(settings.regionPadLeft===undefined && settings.regionPadRight===undefined && settings.regionPadX!==undefined){
        settings.regionPadLeft=settings.regionPadX;settings.regionPadRight=settings.regionPadX
      }
      ;[['regionOpacity',0,20],['inkOpacity',4,24],['regionPadLeft',0,32],['regionPadRight',-16,32],['regionPadY',0,24],['regionRadius',0,20]].forEach(function(spec){
        var n=Number(settings[spec[0]])
        settings[spec[0]]=Number.isFinite(n)?Math.round(clamp(n,spec[1],spec[2])):STYLE_DEFAULTS[spec[0]]
      })
    }
    function updateStyle(patch) {
      Object.keys(STYLE_DEFAULTS).forEach(function(key){if(Object.prototype.hasOwnProperty.call(patch,key))settings[key]=patch[key]})
      normalizeStyle();saveStore();ensureStyle();shadowSheets.forEach(function(sheet){sheet.replaceSync(document.getElementById(STYLE_ID).textContent)});mounts.forEach(function(m){if(m.rec.mode==='ink')paintInk(m)});paintRegions();syncStyleForm()
    }
    function syncStyleForm() {
      if(!dom.panel)return
      qa('[data-style-field]',dom.panel).forEach(function(input){input.value=String(settings[input.getAttribute('data-style-field')])})
      qa('output[data-style-value]',dom.panel).forEach(function(out){var key=out.getAttribute('data-style-value');out.textContent=settings[key]+(/Opacity$/.test(key)?'%':'px')})
    }
    // 非模态面板：点面板外面（或按 Esc / 完成）就关，不再锁住整页
    function settingsOutside(ev) {
      if (!dom.panel || !dom.panel.open) return
      var path = ev.composedPath ? ev.composedPath() : [ev.target]
      for (var i = 0; i < path.length; i++) {
        if (path[i] === dom.panel) return
        if (dom.settingsButton && path[i] === dom.settingsButton) return
      }
      settingsReturnFocus=false;dom.panel.close()
    }
    function openSettings() {
      settingsReturnFocus=true;hideInkAction();setArmed(false)
      if(!dom.panel) {
        var panel=make('dialog',{'data-dsh-crease-settings':'','aria-labelledby':'dsh-crease-settings-title'})
        panel.appendChild(make('h2',{id:'dsh-crease-settings-title'},'折痕 · 隐墨'))
        panel.appendChild(make('p',{},'折痕收起段落，隐墨藏起字句。外观即时生效，自动保存。'))
        panel.appendChild(make('label',{for:'dsh-crease-color'},'区域颜色'))
        var colors=make('div',{class:'crease-color'})
        colors.appendChild(make('input',{id:'dsh-crease-color',type:'color','data-style-field':'regionColor','aria-label':'选择区域颜色'}))
        colors.appendChild(make('input',{type:'text',pattern:'#[0-9a-fA-F]{6}',maxlength:'7','data-style-field':'regionColor','aria-label':'区域颜色十六进制值',spellcheck:'false'}))
        panel.appendChild(colors)
        ;[['regionOpacity','展开区域浓淡',0,20],['inkOpacity','隐墨浓淡',4,24],['regionPadLeft','左外扩',0,32],['regionPadRight','右外扩',-16,32],['regionPadY','上下外扩',0,24],['regionRadius','边角圆润',0,20]].forEach(function(spec){
          var id='dsh-crease-'+spec[0],label=make('label',{for:id},spec[1]);label.appendChild(make('output',{'data-style-value':spec[0],for:id}));panel.appendChild(label)
          panel.appendChild(make('input',{id:id,type:'range',min:spec[2],max:spec[3],step:1,'data-style-field':spec[0]}))
        })
        var footer=make('footer'),reset=make('button',{type:'button','data-action':'reset'},'恢复默认'),done=make('button',{type:'button','data-action':'done'},'完成')
        reset.addEventListener('click',function(){updateStyle(STYLE_DEFAULTS)})
        done.addEventListener('click',function(){panel.close()})
        footer.appendChild(reset);footer.appendChild(done);panel.appendChild(footer)
        panel.addEventListener('input',function(ev){
          var input=ev.target,key=input.getAttribute && input.getAttribute('data-style-field')
          if(!key)return
          if(key==='regionColor' && !/^#[0-9a-f]{6}$/i.test(input.value))return
          var patch={};patch[key]=key==='regionColor'?input.value:Number(input.value);updateStyle(patch)
        })
        panel.addEventListener('change',function(ev){if(ev.target.type==='text')syncStyleForm()})
        panel.addEventListener('close',function(){document.removeEventListener('pointerdown',settingsOutside,true);if(settingsReturnFocus && dom.settingsButton)dom.settingsButton.focus()})
        document.body.appendChild(panel);dom.panel=panel
      }
      syncStyleForm()
      document.removeEventListener('pointerdown',settingsOutside,true)
      document.addEventListener('pointerdown',settingsOutside,true)
      if(!dom.panel.open)dom.panel.show()
    }
    // DOM traversal crosses open shadow roots. Queries never expand the writable scope to body.
    function parentElement(node) {
      return node && (node.assignedSlot || node.parentElement || (node.parentNode && node.parentNode.host) || node.host)
    }
    function closest(node, selector) {
      var el = node && node.nodeType === 1 ? node : parentElement(node)
      while (el) { if (el.matches && el.matches(selector)) return el; el = parentElement(el) }
      return null
    }
    function rootsIn(root) {
      var out = []
      function visit(r) {
        if (!r || out.indexOf(r) >= 0) return
        out.push(r)
        if (r.shadowRoot) visit(r.shadowRoot)
        qa('*', r).forEach(function (el) { if (el.shadowRoot) visit(el.shadowRoot) })
      }
      visit(root)
      return out
    }
    function deepQA(selector, root) {
      var out = []
      rootsIn(root || document).forEach(function (r) { out = out.concat(qa(selector, r)) })
      return out
    }
    function eachTextNode(root, fn) {
      function walk(n) {
        if (n.nodeType === 3) { fn(n); return }
        if (n.nodeType === 1 && n.matches('script,style,noscript,template')) return
        for (var c = n.firstChild; c; c = c.nextSibling) walk(c)
        if (n.shadowRoot) walk(n.shadowRoot)
      }
      if (root) walk(root)
    }
    function sessionId() {
      var found = null
      try {
        var cur = ctxRef && ctxRef.uiSession && ctxRef.uiSession.adapter && ctxRef.uiSession.adapter.current
        if (cur) found = (cur.binding && cur.binding.key) || cur.sessionId || cur.id
      } catch (e) {}
      if (!found) {
        try { var j = JSON.parse(localStorage.getItem('dsh.sessions.current') || 'null'); found = j && j.sessionId } catch (e) {}
      }
      if (found) stickySession = String(found) // A temporary null does not replace a known id; a new real id does.
      return stickySession
    }
    function scrollRoot() {
      var list = qa(SEL.scroll)
      return list.find(function (el) { var r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 }) || null
    }
    function rowByKey(key) {
      var sc = scrollRoot()
      return key && sc ? deepQA(rowSel(key), sc)[0] || null : null
    }
    function records() {
      var id = sessionId()
      if (!id) return []
      if (!Array.isArray(store.sessions[id])) store.sessions[id] = []
      return store.sessions[id]
    }
    function syncSession() {
      var id = sessionId()
      if (activeSession !== id) {
        if(drag)traceGesture('cancel-session-change')
        hideInkAction();if(drag)endDrag();setArmed(false)
        Array.from(mounts.keys()).forEach(restoreMount)
        activeSession = id
      }
    }
    function label(text) { return Array.from(String(text).replace(/\s+/g, ' ').trim()).slice(0, Math.max(1,Math.min(12,Number(settings.labelChars)||12))).join('') }
    function rowSnapshot(row) {
      var entries = [], text = ''
      eachTextNode(row, function (n) {
        entries.push({ node: n, start: text.length, end: text.length + n.data.length })
        text += n.data
      })
      return { text: text, entries: entries }
    }
    function containsBox(outer, inner) {
      return inner.left >= outer.left - 0.5 && inner.right <= outer.right + 0.5 && inner.top >= outer.top - 0.5 && inner.bottom <= outer.bottom + 0.5
    }
    function intersect(a, b) {
      var r = { left: Math.max(a.left,b.left), right: Math.min(a.right,b.right), top: Math.max(a.top,b.top), bottom: Math.min(a.bottom,b.bottom) }
      return r.right > r.left && r.bottom > r.top ? r : null
    }
    function visibleClip(node) {
      var clip = { left: 0, top: 0, right: innerWidth, bottom: innerHeight }
      var el = node.nodeType === 1 ? node : parentElement(node)
      while (el) {
        var cs = getComputedStyle(el)
        if (el.hidden || el.getAttribute('aria-hidden') === 'true' || cs.display === 'none' || cs.visibility === 'hidden' || cs.visibility === 'collapse' || Number(cs.opacity) === 0 || cs.contentVisibility === 'hidden') return null
        if (cs.display !== 'contents') {
          var r = el.getBoundingClientRect()
          // Overflow is axis-specific; display:contents has no clipping box.
          if (/^(hidden|clip|scroll|auto)$/.test(cs.overflowX)) { clip.left = Math.max(clip.left,r.left + el.clientLeft); clip.right = Math.min(clip.right,r.left + el.clientLeft + el.clientWidth) }
          if (/^(hidden|clip|scroll|auto)$/.test(cs.overflowY)) { clip.top = Math.max(clip.top,r.top + el.clientTop); clip.bottom = Math.min(clip.bottom,r.top + el.clientTop + el.clientHeight) }
        }
        if (clip.left >= clip.right || clip.top >= clip.bottom) return null
        el = parentElement(el)
      }
      return clip
    }
    function blocked(node) {
      var row = closest(node, SEL.row)
      return !row || !!closest(node, '[data-dsh-crease-body],[data-dsh-crease-row],[data-dsh-crease-hidrow],[data-crease-id],button,input,textarea,select,[contenteditable]:not([contenteditable="false"]),[data-code-block-banner]') ||
        !!closest(node, SEL.streaming) || deepQA(SEL.streaming,row).length > 0 || !!closest(row, SEL.streaming)
    }
    function boundaries(text) {
      var out = [0]
      if (segmenter) { for (var part of segmenter.segment(text)) out.push(part.index + part.segment.length) }
      else { var pos = 0; for (var ch of text) { pos += ch.length; out.push(pos) } }
      return out
    }
    // Subdivide intervals by actual Range rects; no assumption that x or y is monotonic.
    function intervalsInBox(node, box, stats) {
      var offsets = boundaries(node.data), found = [], range = document.createRange()
      function search(lo, hi) {
        if (++stats.measures > 100000) throw new Error('selection-limit')
        range.setStart(node,offsets[lo]); range.setEnd(node,offsets[hi])
        var rects = Array.from(range.getClientRects()).filter(function (r) { return r.height > 0 })
        var hasInk = rects.some(function (r) { return r.width > 0 && overlaps(r,box) })
        if (!hasInk) {
          // Newlines and zero-width format characters may still belong to the selected code lines.
          if (!/^\s+$/.test(node.data.slice(offsets[lo],offsets[hi])) || !rects.some(function (r) { return r.left >= box.left && r.left <= box.right && r.top >= box.top && r.bottom <= box.bottom })) return
        }
        if (hi - lo === 1 || rects.every(function (r) { return containsBox(box,r) })) {
          var last = found[found.length-1]
          if (last && last.end === offsets[lo]) last.end = offsets[hi]
          else found.push({ node: node, start: offsets[lo], end: offsets[hi] })
          return
        }
        var mid = (lo + hi) >> 1
        search(lo,mid); search(mid,hi)
      }
      if (offsets.length > 1) search(0,offsets.length-1)
      return found
    }
    function collectTargets(box) {
      var sc = scrollRoot(), out = []
      var stats = { seen:0, hit:0, skipped:0, measures:0, textHits:0, codeHits:0, pres:0, shadowHosts:0, root:'conversation', fallback:false, reasons:{ guarded:0, invisible:0, outside:0, unanchored:0 } }
      if (sc) {
        stats.pres = deepQA('pre',sc).filter(function (el) { return overlaps(el.getBoundingClientRect(),box) }).length
        stats.shadowHosts = rootsIn(sc).length-1
        try {
          eachTextNode(sc, function (node) {
            stats.seen++
            if (!node.data) return
            if (!closest(node,SEL.row)) { stats.reasons.unanchored++; return }
            if (blocked(node)) { stats.reasons.guarded++; return }
            var clip = visibleClip(node), searchBox = clip && intersect(clip,box)
            if (!searchBox) { stats.reasons.invisible++; stats.skipped++; return }
            var hits = intervalsInBox(node,searchBox,stats)
            if (!hits.length) { stats.reasons.outside++; return }
            stats.hit++
            if (closest(node,'pre,code')) stats.codeHits++; else stats.textHits++
            out = out.concat(hits)
          })
        } catch (e) { stats.limit = e.message === 'selection-limit'; stats.error = e.message; out = [] }
      }
      lastStats = stats
      writeDiag({ last:'selection' })
      return { list:out, stats:stats }
    }

    function textTarget(part) {
      var row=closest(part.node,SEL.row),snap=rowSnapshot(row),entry=snap.entries.find(function(e){return e.node===part.node})
      if(!entry)return null
      var start=entry.start+part.start,end=entry.start+part.end
      return {kind:'text',key:row.getAttribute('data-chat-anchor-key'),start:start,end:end,text:snap.text.slice(start,end),before:snap.text.slice(Math.max(0,start-24),start),after:snap.text.slice(end,end+24)}
    }
    function safeText(node,forInk) {
      var row=closest(node,SEL.row)
      if(!row || !node.data || closest(row,SEL.streaming) || deepQA(SEL.streaming,row).length)return false
      if(closest(node,'button,input,textarea,select,[contenteditable]:not([contenteditable="false"]),[data-code-block-banner],[data-dsh-crease-hidrow],[data-crease-open="0"]'))return false
      if(forInk)return !closest(node,'[data-dsh-ink]')
      // Ink may be part of a whole-line fold; existing folds are never nested.
      return !closest(node,'[data-dsh-crease-body]:not([data-dsh-ink]),[data-dsh-crease-row]')
    }
    function lineHost(node) {
      var el=parentElement(node),row=closest(node,SEL.row)
      while(el && el!==row){if(/^(block|flow-root|list-item|table-cell|table-row)$/.test(getComputedStyle(el).display))return el;el=parentElement(el)}
      return row
    }
    function layoutRect(el) {
      var sc=scrollRoot()
      while(el){
        var rect=el.getBoundingClientRect()
        if(getComputedStyle(el).display!=='contents' && rect.width>0)return rect
        if(el===sc)break
        el=parentElement(el)
      }
      return null
    }
    function inReadingColumn(node,x) {
      var row=closest(node,SEL.row),el=node.nodeType===1?node:parentElement(node)
      if(!row)return false
      while(el && el!==row){
        var parent=parentElement(el)
        if(!parent)break
        var css=getComputedStyle(parent),r=el.getBoundingClientRect()
        if(css.display==='grid' || css.display==='inline-grid' || ((css.display==='flex' || css.display==='inline-flex') && !/^column/.test(css.flexDirection))){
          var beside=r.width>0 && Array.from(parent.children).some(function(peer){
            if(peer===el)return false
            var p=peer.getBoundingClientRect()
            return p.width>0 && p.height>0 && p.top<r.bottom && p.bottom>r.top && (p.left>=r.right-1 || p.right<=r.left+1)
          })
          if(beside && (x<r.left-6 || x>r.right+6))return false
        }
        el=parent
      }
      return true
    }
    function mergeParts(parts) {
      var nodes=new Map(),out=[]
      parts.forEach(function(p){if(!nodes.has(p.node))nodes.set(p.node,[]);nodes.get(p.node).push(p)})
      nodes.forEach(function(list){list.sort(function(a,b){return a.start-b.start});var last=null;list.forEach(function(p){if(last && p.start<=last.end)last.end=Math.max(last.end,p.end);else{last={node:p.node,start:p.start,end:p.end};out.push(last)}})})
      return out
    }
    function collectLines(box,anchorX) {
      var sc=scrollRoot(),parts=[],units=new Set(),codes=new Map(),boxes=[],stats={seen:0,guarded:0,clipped:0,columnRejected:0,textHits:0,measures:0,limit:false,error:null},limit=false
      if(!sc){lastStats=Object.assign(stats,{error:'no-scroll-root'});return {list:[],boxes:[],box:box,error:'no-scroll-root'}}
      try {
        eachTextNode(sc,function(node){
          stats.seen++
          if(!safeText(node,false)){stats.guarded++;return}
          var unit=closest(node,'tr') || closest(node,'pre') || closest(node,'li'),host=unit || lineHost(node)
          if(!host)return
          var hr=layoutRect(host),clip=visibleClip(node)
          if(!hr || !clip){stats.clipped++;return}
          if(!inReadingColumn(host,anchorX)){stats.columnRejected++;return}
          var wide=intersect({left:clip.left,right:clip.right,top:box.top,bottom:box.bottom},clip)
          if(!wide)return
          var hits=intervalsInBox(node,wide,stats)
          if(!hits.length)return
          stats.textHits++
          if(unit && unit.tagName==='TR'){units.add(rowCanCollapse(unit)?unit:closest(unit,'table'));return}
          if(unit && unit.tagName==='LI'){units.add(unit);return}
          if(unit && unit.tagName==='PRE'){
            if(!codes.has(unit))codes.set(unit,[]);codes.set(unit,codes.get(unit).concat(hits));return
          }
          parts=parts.concat(hits)
          hits.forEach(function(p){var range=document.createRange();range.setStart(node,p.start);range.setEnd(node,p.end);Array.from(range.getClientRects()).forEach(function(r){if(r.height && r.width){var area=intersect({left:hr.left,right:hr.right,top:r.top,bottom:r.bottom},clip);if(area)boxes.push(area)}})})
        })
        units.forEach(function(unit){
          if(!unit || closest(unit,SEL.streaming) || deepQA('[data-dsh-crease-row],[data-dsh-crease-body]:not([data-dsh-ink])',unit).length)return
          eachTextNode(unit,function(node){if(safeText(node,false))parts.push({node:node,start:0,end:node.data.length})})
          var clip=visibleClip(unit),area=clip && intersect(unit.getBoundingClientRect(),clip);if(area)boxes.push(area)
        })
        codes.forEach(function(hits,pre){
          var snap=rowSnapshot(pre),intervals=[]
          hits.forEach(function(p){var e=snap.entries.find(function(x){return x.node===p.node});if(!e)return;var start=e.start+p.start,end=e.start+p.end;start=snap.text.lastIndexOf('\n',Math.max(0,start-1))+1;var next=snap.text.indexOf('\n',Math.max(start,end-1));end=next<0?snap.text.length:next+1;intervals.push([start,end])})
          snap.entries.forEach(function(e){intervals.forEach(function(pair){if(e.end>pair[0] && e.start<pair[1] && safeText(e.node,false))parts.push({node:e.node,start:Math.max(0,pair[0]-e.start),end:Math.min(e.node.data.length,pair[1]-e.start)})})})
          var hr=pre.getBoundingClientRect(),clip=visibleClip(pre)
          parts.filter(function(p){return under(p.node,pre)}).forEach(function(p){var r=document.createRange();r.setStart(p.node,p.start);r.setEnd(p.node,p.end);Array.from(r.getClientRects()).forEach(function(b){var area=clip && intersect({left:hr.left,right:hr.right,top:b.top,bottom:b.bottom},clip);if(area)boxes.push(area)})})
        })
      } catch(e){limit=e.message==='selection-limit';stats.limit=limit;stats.error=e.message || String(e);parts=[];boxes=[]}
      parts=mergeParts(parts)
      // Merge only bands with the same horizontal extent; never bridge separate columns.
      boxes.sort(function(a,b){return a.left-b.left || a.top-b.top})
      boxes=boxes.reduce(function(out,b){var a=out[out.length-1];if(a && Math.abs(a.left-b.left)<1 && Math.abs(a.right-b.right)<1 && b.top<=a.bottom+3)a.bottom=Math.max(a.bottom,b.bottom);else out.push({left:b.left,right:b.right,top:b.top,bottom:b.bottom});return out},[])
      var bounds=boxes.length?{left:Math.min.apply(null,boxes.map(function(b){return b.left})),right:Math.max.apply(null,boxes.map(function(b){return b.right})),top:Math.min.apply(null,boxes.map(function(b){return b.top})),bottom:Math.max.apply(null,boxes.map(function(b){return b.bottom}))}:box
      stats.parts=parts.length;stats.bands=boxes.length;lastStats=stats
      return {list:parts,boxes:boxes,box:bounds,limit:limit,error:stats.error}
    }

    function elementPath(row, el) {
      var path = []
      while (el && el !== row) {
        if (el.nodeType === 11 && el.host) { path.unshift('shadow'); el = el.host }
        else { var p = el.parentNode; if (!p || !p.children) return null; path.unshift(Array.prototype.indexOf.call(p.children,el)); el = p }
      }
      return el === row ? path : null
    }
    function elementAt(row,path) {
      var el = row
      for (var i = 0; el && i < path.length; i++) el = path[i] === 'shadow' ? el.shadowRoot : el.children[path[i]]
      return el && el.nodeType === 1 ? el : null
    }
    function fullyCovered(el, box, items) {
      var r = el.getBoundingClientRect(), clip = visibleClip(el)
      if (!r.width || !r.height || !clip || !containsBox(box,r) || !containsBox(clip,r)) return false
      if (closest(el,SEL.streaming) || deepQA(SEL.streaming + ',[data-dsh-crease-body],[data-dsh-crease-row],[data-crease-id]',el).length) return false
      return sourceCovered(el,items)
    }
    function under(node, ancestor) {
      while (node) { if (node === ancestor) return true; node = parentElement(node) }
      return false
    }
    // A full source selection need not include padding, the language label, or the copy button.
    function sourceCovered(pre, items) {
      var count = 0, ok = true
      eachTextNode(pre, function (n) {
        if (!n.data.trim() || closest(n,'button,[data-code-block-banner]')) return
        count++
        var spans = items.filter(function (t) { return t.node === n }).sort(function(a,b){return a.start-b.start}), end = 0
        spans.forEach(function(t){if(n.data.slice(end,t.start).trim())ok=false;end=Math.max(end,t.end)})
        if (n.data.slice(end).trim()) ok=false
      })
      return count > 0 && ok
    }
    function codeUnit(pre) {
      var card = closest(pre,'.md-code-block')
      return card && closest(card,SEL.row) === closest(pre,SEL.row) && deepQA('pre',card).length === 1 ? card : pre
    }
    // The planner works on rendered layout and complete text coverage, not Markdown tags.
    function layoutHost(el) {
      if (!el || closest(el,'button,input,textarea,select,[contenteditable]:not([contenteditable="false"])')) return false
      if (closest(el,'pre,code') && el.tagName !== 'PRE') return false
      if (/^(TD|TH|THEAD|TBODY|TFOOT|CAPTION|COL|COLGROUP)$/.test(el.tagName)) return false
      var display=getComputedStyle(el).display
      return /^(block|flow-root|list-item|table|table-row)$/.test(display)
    }
    function rowCanCollapse(el) {
      if (el.tagName !== 'TR') return true
      var table=closest(el,'table')
      // A row spanning into another row is a shared layout unit: keep it intact.
      return table && !deepQA('td,th',table).some(function(cell){return closest(cell,'table')===table && cell.rowSpan!==1})
    }
    function structureCovered(el, items, box) {
      if (!layoutHost(el) || !rowCanCollapse(el) || !sourceCovered(el,items) || closest(el,SEL.streaming)) return false
      if (deepQA(SEL.streaming + ',[data-dsh-crease-row],[data-dsh-crease-body],[data-dsh-crease-hidrow],[data-crease-id]',el).length) return false
      var independent='img,video,audio,canvas,svg,iframe,object,input,textarea,select,button,[contenteditable]:not([contenteditable="false"])'
      return !deepQA(independent,el).some(function(media){
        if (closest(media,'[data-code-block-banner]') || (media.tagName==='BUTTON' && closest(media,'.md-code-block'))) return false
        if (media.tagName==='INPUT' && media.type==='checkbox' && media.disabled) return false
        var r=media.getBoundingClientRect(), clip=visibleClip(media)
        return !box || !clip || !containsBox(box,r) || !containsBox(clip,r)
      })
    }
    function maximalContainers(items,box) {
      var candidates=new Set()
      items.forEach(function(p){
        var row=closest(p.node,SEL.row),el=parentElement(p.node)
        while(el && el!==row && el.getRootNode()===p.node.getRootNode()){if(layoutHost(el))candidates.add(el);el=parentElement(el)}
      })
      var selected=Array.from(candidates).filter(function(el){return structureCovered(el,items,box)})
      return selected.filter(function(el){return !selected.some(function(other){return other!==el && under(el,other)})})
    }
    function foldTargets(items, box, lineMode) {
      syncSession()
      if (!sessionId()) { toast('正在确认会话，请稍后再折叠'); return null }
      var selectedText = items.map(function (t) { return t.node.data.slice(t.start,t.end) }).join('')
      if (!selectedText.trim()) return null
      var rec = { id:uid(), sessionId:sessionId(), schema:6, mode:lineMode?'line':'fold', label:label(selectedText), chars:Array.from(selectedText.replace(/\s+/g,'')).length, open:false, targets:[], createdAt:Date.now() }
      var groups = new Map()
      items.forEach(function (t) { var row = closest(t.node,SEL.row); if (!groups.has(row)) groups.set(row,[]); groups.get(row).push(t) })
      groups.forEach(function (parts,row) {
        var key = row.getAttribute('data-chat-anchor-key'), snap = rowSnapshot(row)
        if (fullyCovered(row,box,parts)) { rec.targets.push({kind:'row',key:key,text:snap.text}); return }
        var containers=maximalContainers(parts,box)
        containers.forEach(function(el){
          var pre=el.tagName==='PRE'?el:el.matches('.md-code-block') && deepQA('pre',el).length===1?deepQA('pre',el)[0]:null
          if(pre)rec.targets.push({kind:'block',key:key,path:elementPath(row,pre),text:rowSnapshot(pre).text})
          else rec.targets.push({kind:'element',key:key,path:elementPath(row,el),tag:el.tagName,text:rowSnapshot(el).text})
        })
        parts.forEach(function (t) {
          if (containers.some(function(el){return under(t.node,el)})) return
          var entry = snap.entries.find(function (x) { return x.node === t.node })
          if (!entry) return
          var start = entry.start+t.start, end = entry.start+t.end
          rec.targets.push({kind:'text',key:key,start:start,end:end,text:snap.text.slice(start,end),before:snap.text.slice(Math.max(0,start-24),start),after:snap.text.slice(end,end+24)})
        })
      })
      releaseInkMounts()
      if (!rec.targets.length || !ensureTargets(rec)) { refreshInk();toast('没有找到稳定且可见的折痕落点，内容已保留'); return null }
      records().push(rec); saveStore(); refreshInk()
      lastFoldDiag = { last:'fold', targets:rec.targets.length, chars:rec.chars, stats:lastStats, at:Date.now() }
      writeDiag(lastFoldDiag)
      return rec
    }
    function ensureRootStyle(el) {
      var root = el.getRootNode()
      if (root === document || shadowSheets.has(root)) return
      var sheet = new CSSStyleSheet()
      sheet.replaceSync(document.getElementById(STYLE_ID).textContent)
      root.adoptedStyleSheets = root.adoptedStyleSheets.concat(sheet)
      shadowSheets.set(root,sheet)
    }
    function saveAttrs(el) {
      var out = {}
      ;[A.rowBar,A.rowHidden,A.id,A.label,A.meta,A.open,'tabindex','role','aria-expanded','aria-label','title','data-dsh-crease-table-row','data-dsh-crease-table'].forEach(function (k) { out[k] = el.getAttribute(k) })
      return out
    }
    function restoreAttrs(el,attrs) {
      Object.keys(attrs).forEach(function (k) { if (attrs[k] === null) el.removeAttribute(k); else el.setAttribute(k,attrs[k]) })
    }
    function lockListNumbers(mount,el) {
      var list=el.tagName==='LI' && el.parentElement
      if (!list || list.tagName!=='OL' || mount.lists.has(list)) return
      mount.lists.add(list)
      var state=listNumbers.get(list)
      if (!state) { state={owners:new Set(),entries:new Map()};listNumbers.set(list,state) }
      state.owners.add(mount.rec.id)
      var children=Array.from(list.children).filter(function(x){return x.tagName==='LI'}), reversed=list.hasAttribute('reversed'), step=reversed?-1:1
      var current=parseInt(list.getAttribute('start'),10)
      if (!Number.isFinite(current)) current=reversed?children.length:1
      children.forEach(function(li){
        var prior=state.entries.get(li), original=prior?prior.original:li.getAttribute('value'), explicit=parseInt(original,10)
        if (Number.isFinite(explicit)) current=explicit
        var assigned=String(current)
        state.entries.set(li,{original:original,assigned:assigned});li.setAttribute('value',assigned);current+=step
      })
    }
    function releaseListNumbers(mount) {
      mount.lists.forEach(function(list){
        var state=listNumbers.get(list)
        if(!state)return
        state.owners.delete(mount.rec.id)
        if(state.owners.size)return
        state.entries.forEach(function(entry,li){if(li.getAttribute('value')!==entry.assigned)return;if(entry.original===null)li.removeAttribute('value');else li.setAttribute('value',entry.original)})
        listNumbers.delete(list)
      })
    }
    function addPiece(mount,el,wrapper) {
      mount.pieces.push({el:el,attrs:saveAttrs(el),styles:saveControlStyle(el),wrapper:wrapper,text:rowSnapshot(el).text})
      ensureRootStyle(el)
      lockListNumbers(mount,el)
    }
    function wrapPart(part,mount) {
      var node = part.node, value = node.data, pieces = [node], tail = null
      if (part.end < value.length) { tail = node.splitText(part.end) }
      var selected = part.start > 0 ? node.splitText(part.start) : node
      if (selected !== node) pieces.push(selected)
      if (tail) pieces.push(tail)
      mount.splits.push({node:node,value:value,pieces:pieces})
      var span = make('span', { 'data-dsh-crease-body':'', 'data-crease-id':mount.rec.id })
      node.parentNode.insertBefore(span,selected); span.appendChild(selected)
      addPiece(mount,span,true)
    }
    function resolveText(t,snap) {
      var at = -1
      if (Number.isInteger(t.start) && snap.text.slice(t.start,t.end) === t.text) at = t.start
      if (at < 0 && t.text) {
        var candidates = [], from = 0, i
        while ((i = snap.text.indexOf(t.text,from)) >= 0) {
          var good = t.before === undefined || (snap.text.slice(Math.max(0,i-t.before.length),i) === t.before && snap.text.slice(i+t.text.length,i+t.text.length+t.after.length) === t.after)
          if (good) candidates.push(i)
          from = i + Math.max(1,t.text.length)
        }
        if (t.before === undefined) at = candidates[t.occurrence || 0] === undefined ? -1 : candidates[t.occurrence || 0]
        else if (candidates.length === 1) at = candidates[0]
      }
      if (at < 0) return null
      var end = at+t.text.length, parts = []
      snap.entries.forEach(function (e) { if (e.end > at && e.start < end) parts.push({node:e.node,start:Math.max(0,at-e.start),end:Math.min(e.node.data.length,end-e.start)}) })
      return parts.length ? parts : null
    }
    function saveControlStyle(el) {
      var values={}
      ;['--dsh-crease-display','--dsh-crease-pad-top','--dsh-crease-pad-right'].forEach(function(k){values[k]=[el.style.getPropertyValue(k),el.style.getPropertyPriority(k)]})
      return {properties:values,raw:el.getAttribute('style'),cssText:el.style.cssText}
    }
    function restoreControlStyle(el,snapshot) {
      var values=snapshot.properties
      Object.keys(values).forEach(function(k){if(values[k][0])el.style.setProperty(k,values[k][0],values[k][1]);else el.style.removeProperty(k)})
      if(el.style.cssText===snapshot.cssText){if(snapshot.raw===null)el.removeAttribute('style');else el.setAttribute('style',snapshot.raw)}
      else if(!el.getAttribute('style'))el.removeAttribute('style')
    }
    function tableColumns(table) {
      var occupied=[],max=1
      mounts.forEach(function(m){if(m.table===table && m.columns)max=Math.max(max,m.columns)})
      Array.from(table.rows).forEach(function(row){
        if(row.getAttribute('data-dsh-crease-table-row')==='closed')return
        var col=0
        Array.from(row.cells).forEach(function(cell){
          while(occupied[col]>0)col++
          for(var i=0;i<cell.colSpan;i++)occupied[col+i]=cell.rowSpan===0?table.rows.length:cell.rowSpan
          col+=cell.colSpan
        })
        max=Math.max(max,col,occupied.length)
        occupied=occupied.map(function(n){return Math.max(0,(n||0)-1)})
      })
      return max
    }
    function configureControl(m,owner) {
      m.owner=owner;m.bar=owner
      if(owner.tagName==='TR' || owner.tagName==='TABLE') {
        var row=owner.tagName==='TR'?owner:Array.from(owner.rows)[0]
        var cell=row && Array.from(row.cells)[0],table=closest(row,'table')
        if(!cell || !table)throw new Error('table-control-unavailable')
        m.table=table;m.tableRow=row;m.bar=cell;m.columns=tableColumns(table)
        m.cellAttrs={colspan:cell.getAttribute('colspan'),rowspan:cell.getAttribute('rowspan')}
        ;[cell,row].forEach(function(el){if(el!==owner)m.extras.push({el:el,attrs:saveAttrs(el),styles:saveControlStyle(el)})})
        if(owner.tagName==='TABLE'){m.tableRows=Array.from(owner.rows).filter(function(other){return other!==row});m.tableRows.forEach(function(el){m.extras.push({el:el,attrs:saveAttrs(el),styles:saveControlStyle(el)})})}
        row.setAttribute('data-dsh-crease-table-row','open')
        ensureRootStyle(cell)
      }
      var cs=getComputedStyle(m.bar)
      ;['top','right'].forEach(function(side){m.bar.style.setProperty('--dsh-crease-pad-'+side,(parseFloat(cs['padding'+side[0].toUpperCase()+side.slice(1)])||0)+'px')})
      m.bar.style.setProperty('--dsh-crease-display',getComputedStyle(m.bar).display || 'block')
    }
    function paintTable(m) {
      if(!m.tableRow)return
      if(m.tableRows)m.tableRows.forEach(function(row){if(m.rec.open)row.removeAttribute(A.rowHidden);else row.setAttribute(A.rowHidden,'')})
      m.tableRow.setAttribute('data-dsh-crease-table-row',m.rec.open?'open':'closed')
      if(m.owner.tagName==='TABLE')m.owner.setAttribute('data-dsh-crease-table',m.rec.open?'open':'closed')
      if(m.rec.open)Object.keys(m.cellAttrs).forEach(function(k){if(m.cellAttrs[k]===null)m.bar.removeAttribute(k);else m.bar.setAttribute(k,m.cellAttrs[k])})
      else {m.bar.setAttribute('colspan',String(m.columns));m.bar.setAttribute('rowspan','1')}
    }
    function headerRect(bar) {
      var r=bar.getBoundingClientRect(),cs=getComputedStyle(bar),left=(parseFloat(cs.paddingLeft)||0)+(parseFloat(cs.borderLeftWidth)||0),right=(parseFloat(cs.paddingRight)||0)+(parseFloat(cs.borderRightWidth)||0)
      var top=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.borderTopWidth)||0),width=Math.max(0,r.width-left-right)
      return {left:r.left+left,right:r.left+left+width,top:r.top+top,bottom:r.top+top+32}
    }
    function mountIntact(m) {
      return m.pieces.length && m.pieces.every(function (p) { return p.el.isConnected && p.el.getAttribute(A.id) === m.rec.id && rowSnapshot(p.el).text === p.text && !closest(p.el,SEL.streaming) && !deepQA(SEL.streaming,closest(p.el,SEL.row) || p.el).length }) && m.bar.isConnected && m.bar.getAttribute(A.id)===m.rec.id && m.bar.hasAttribute(A.rowBar)
    }
    // Measure continuous bands in a common parent; paint outside React's content tree.
    function regionBands(host,pieces) {
      var bands=pieces.map(function(el){var r=el.getBoundingClientRect();return [r.top,r.bottom]}).filter(function(b){return b[1]>b[0]}).sort(function(a,b){return a[0]-b[0]}),obstacles=[]
      eachTextNode(host,function(node){
        if(!node.data.trim() || pieces.some(function(el){return under(node,el)}) || !visibleClip(node))return
        var range=document.createRange();range.selectNodeContents(node)
        Array.from(range.getClientRects()).forEach(function(r){if(r.width && r.height)obstacles.push([r.top,r.bottom])})
      })
      deepQA('[data-dsh-crease-row]',host).forEach(function(el){if(!pieces.some(function(p){return under(el,p)})){var r=el.getBoundingClientRect();obstacles.push([r.top,r.bottom])}})
      return bands.reduce(function(out,b){
        var last=out[out.length-1]
        if(last && (b[0]<=last[1] || !obstacles.some(function(o){return o[0]<b[0] && o[1]>last[1]})))last[1]=Math.max(last[1],b[1])
        else out.push(b.slice())
        return out
      },[])
    }
    function paintRegions() {
      var boxes=[]
      mounts.forEach(function(m){
        if(!m.rec.open || !m.bar || !m.bar.isConnected)return
        var groups=new Map()
        m.pieces.forEach(function(p){
          if(!p.el.isConnected)return
          var key=closest(p.el,SEL.row),root=p.el.getRootNode()
          if(!groups.has(key))groups.set(key,new Map())
          var roots=groups.get(key);if(!roots.has(root))roots.set(root,[]);roots.get(root).push(p.el)
        })
        groups.forEach(function(roots){roots.forEach(function(pieces){
          var root=pieces[0].getRootNode(),host=pieces[0]
          while(host && (!pieces.every(function(el){return under(el,host)}) || /^(SPAN|TR|TD|TH|THEAD|TBODY|TFOOT)$/.test(host.tagName)))host=parentElement(host)
          if(!host || host.getRootNode()!==root)return
          var rect=host.getBoundingClientRect(),clip=visibleClip(host)
          if(!clip)return
          regionBands(host,pieces).forEach(function(b){
            var area=intersect({left:rect.left-settings.regionPadLeft,right:rect.right+settings.regionPadRight,top:b[0]-settings.regionPadY,bottom:b[1]+settings.regionPadY},clip)
            if(area)boxes.push(area)
          })
        })})
      })
      if(!boxes.length || !settings.regionOpacity || disposed){if(dom.region){dom.region.remove();dom.region=null}return}
      var NS='http://www.w3.org/2000/svg'
      if(!dom.region){dom.region=document.createElementNS(NS,'svg');dom.region.setAttribute('data-dsh-crease-region-layer','');dom.region.setAttribute('aria-hidden','true');dom.region.setAttribute('focusable','false');document.body.appendChild(dom.region)}
      var layer=dom.region,color=getComputedStyle(scrollRoot() || document.body).color.match(/[\d.]+/g)
      layer.toggleAttribute('data-dark',!!color && (Number(color[0])+Number(color[1])+Number(color[2]))>480)
      layer.style.opacity=String(settings.regionOpacity/100)
      layer.setAttribute('fill',settings.regionColor)
      while(layer.children.length>boxes.length)layer.lastElementChild.remove()
      boxes.forEach(function(b,i){
        var mark=layer.children[i] || layer.appendChild(document.createElementNS(NS,'rect'))
        ;{var values={x:b.left,y:b.top,width:b.right-b.left,height:b.bottom-b.top,rx:settings.regionRadius};Object.keys(values).forEach(function(k){var v=String(Math.round(values[k]*10)/10);if(mark.getAttribute(k)!==v)mark.setAttribute(k,v)})}
      })
    }
    function scheduleRegions() {
      hideInkAction();placeGear()
      if(disposed || regionFrame!==null)return
      regionFrame=requestAnimationFrame(function(){regionFrame=null;paintRegions()})
    }
    function paintMount(m) {
      if(m.rec.mode==='ink'){paintInk(m);return}
      m.pieces.forEach(function (p) {
        p.el.setAttribute(A.id,m.rec.id)
        p.el.removeAttribute(A.rowHidden)
        if (!m.rec.open && p.el !== m.owner) p.el.setAttribute(A.rowHidden,'')
      })
      paintTable(m)
      m.bar.setAttribute(A.id,m.rec.id)
      m.bar.setAttribute(A.rowBar,'')
      m.bar.setAttribute(A.open,m.rec.open?'1':'0')
      m.bar.setAttribute(A.label,m.rec.label)
      m.bar.setAttribute(A.meta,(m.rec.chars || 0)+' 字')
      m.bar.setAttribute('tabindex','0')
      m.bar.setAttribute('aria-expanded',String(m.rec.open))
      m.bar.setAttribute('aria-label','折痕：'+m.rec.label+'；'+(m.rec.chars || 0)+' 字；Enter 展开或收起；Delete 删除')
      m.bar.setAttribute('title','点击折痕展开/收起；悬停后点击最右侧关闭图标，或 Alt+点击删除；键盘 Enter / Delete')
    }
    function restoreMount(id) {
      var m = mounts.get(id)
      if (!m) return
      if(m.rec.mode!=='ink')releaseInkMounts()
      mounts.delete(id)
      if(m.control)m.control.remove()
      paintRegions()
      mutate(function () {
        m.pieces.forEach(function (p) {
          var el = p.el
          restoreAttrs(el,p.attrs)
          restoreControlStyle(el,p.styles)
          if (p.wrapper && el.parentNode) { while (el.firstChild) el.parentNode.insertBefore(el.firstChild,el); el.remove() }
        })
        m.extras.forEach(function(p){restoreAttrs(p.el,p.attrs);restoreControlStyle(p.el,p.styles)})
        if(m.cellAttrs)Object.keys(m.cellAttrs).forEach(function(k){if(m.cellAttrs[k]===null)m.bar.removeAttribute(k);else m.bar.setAttribute(k,m.cellAttrs[k])})
        releaseListNumbers(m)
        // Undo only our own untouched splits. Do not normalize unrelated React text nodes.
        m.splits.slice().reverse().forEach(function (s) {
          var ps = s.pieces, parent = ps[0].parentNode
          if (!parent || !ps.every(function (p,i) { return p.parentNode === parent && (!i || ps[i-1].nextSibling === p) }) || ps.map(function(p){return p.data}).join('') !== s.value) return
          s.node.data = s.value
          ps.slice(1).forEach(function (n) { n.remove() })
        })
      })
      paintRegions()
    }
    function ensureTargets(rec) {
      var current = mounts.get(rec.id)
      if(rec.mode==='ink')return ensureInk(rec)
      if (current && mountIntact(current)) return true
      if (current) restoreMount(rec.id)
      var elements = [], parts = [], snaps = new Map(), seen = new Set()
      for (var i = 0; i < rec.targets.length; i++) {
        var t = rec.targets[i], row = rowByKey(t.key)
        if (!row || closest(row,SEL.streaming) || deepQA(SEL.streaming,row).length) return false
        if (t.kind === 'row' || t.kind === 'block' || t.kind === 'element') {
          var el = t.kind === 'row' ? row : elementAt(row,t.path || [])
          if (!el || (t.kind === 'block' && el.tagName !== 'PRE') || (t.kind === 'element' && (!layoutHost(el) || el.tagName !== t.tag || !rowCanCollapse(el))) || (t.text !== undefined && rowSnapshot(el).text !== t.text) || closest(el,'[data-dsh-crease-row],[data-dsh-crease-body],[data-dsh-crease-hidrow],[data-crease-id]') || deepQA('[data-dsh-crease-row],[data-dsh-crease-body],[data-crease-id]',el).length) return false
          if (t.kind === 'block') el = codeUnit(el)
          if (!seen.has(el)) { elements.push(el); seen.add(el) }
        } else {
          if (!snaps.has(row)) snaps.set(row,rowSnapshot(row))
          var found = resolveText(t,snaps.get(row))
          if (!found || found.some(function (p) { return blocked(p.node) })) return false
          parts = parts.concat(found)
        }
      }
      // Replan old text fragments and saved block targets with the same coverage engine.
      var coverage=parts.slice()
      elements.forEach(function(el){eachTextNode(el,function(node){coverage.push({node:node,start:0,end:node.data.length})})})
      maximalContainers(coverage,null).forEach(function(el){if(!seen.has(el)){elements.push(el);seen.add(el)}})
      elements = elements.filter(function(el){return !elements.some(function(other){return other !== el && under(el,other)})})
      if (elements.some(function(el){return !!closest(el,'[data-dsh-crease-row],[data-dsh-crease-body],[data-dsh-crease-hidrow],[data-crease-id]') || deepQA('[data-dsh-crease-row],[data-dsh-crease-body],[data-crease-id]',el).length > 0})) return false
      parts = parts.filter(function(p){return !elements.some(function(el){return under(p.node,el)})})
      if (!elements.length && !parts.length) return false
      var mount = {rec:rec,pieces:[],splits:[],bar:null,owner:null,extras:[],lists:new Set()}
      mounts.set(rec.id,mount)
      try {
        mutate(function () {
          elements.forEach(function (el) { addPiece(mount,el,false) })
          // Multiple disjoint intervals in one Text node must be wrapped from right to left.
          var byNode = new Map()
          parts.forEach(function (p) { if (!byNode.has(p.node)) byNode.set(p.node,[]); byNode.get(p.node).push(p) })
          byNode.forEach(function (list) {
            list.sort(function(a,b){return b.start-a.start})
            for (var j=1;j<list.length;j++) if (list[j].end > list[j-1].start) throw new Error('overlapping-targets')
            list.forEach(function(p){wrapPart(p,mount)})
          })
          var visible = mount.pieces.filter(function(p){var r=p.el.getBoundingClientRect(),c=visibleClip(p.el);return r.width>0 && r.height>0 && c && overlaps(r,c)})
          visible.sort(function(a,b){var x=a.el.getBoundingClientRect(),y=b.el.getBoundingClientRect();return x.top-y.top || x.left-y.left})
          if (!visible.length) throw new Error('no-visible-bar')
          if(rec.mode==='line' && visible[0].wrapper){
            var control=make('span',{'data-dsh-crease-line-control':'',role:'button','data-crease-id':rec.id})
            visible[0].el.parentNode.insertBefore(control,visible[0].el);mount.control=control
            configureControl(mount,control)
          } else configureControl(mount,visible[0].el)
          // Establish and validate a control before hiding any other piece.
          mount.bar.setAttribute(A.rowBar,'');mount.bar.setAttribute(A.open,'0');mount.bar.setAttribute(A.label,rec.label);mount.bar.setAttribute(A.meta,(rec.chars||0)+' 字')
          var r=mount.bar.getBoundingClientRect(),cs=getComputedStyle(mount.bar),pseudo=getComputedStyle(mount.bar,'::before'),clip=visibleClip(mount.bar)
          if (r.width < 80 || r.height < 26 || cs.opacity === '0' || pseudo.content === 'none' || !clip || !containsBox(clip,r)) throw new Error('bar-does-not-fit')
          paintMount(mount)
        })
        return true
      } catch (e) {
        restoreMount(rec.id)
        lastFoldDiag={last:'rollback',reason:e.message,at:Date.now()}
        writeDiag(lastFoldDiag)
        return false
      }
    }

    function releaseInkMounts() {
      Array.from(mounts.values()).forEach(function(m){if(m.rec.mode==='ink')restoreMount(m.rec.id)})
    }
    function refreshInk() {
      if(disposed)return
      records().forEach(function(rec){if(rec.mode==='ink')ensureInk(rec)})
    }
    function paintInk(m) {
      m.pieces.forEach(function(p){
        var el=p.el;el.setAttribute('data-dsh-ink',m.rec.id);el.setAttribute('data-ink-open',m.rec.open?'1':'0')
        el.setAttribute('role','button');el.setAttribute('tabindex','0');el.setAttribute('aria-expanded',String(m.rec.open))
        el.setAttribute('aria-label',m.rec.open?'隐墨，点击轻掩；Delete 移除':'隐墨，点击揭开；Delete 移除')
        el.setAttribute('title',m.rec.open?'轻掩 · Alt+点击移除':'揭开 · Alt+点击移除')
        el.style.setProperty('--dsh-ink-color',settings.regionColor);el.style.setProperty('--dsh-ink-opacity',settings.inkOpacity+'%')
      })
    }
    function ensureInk(rec) {
      var m=mounts.get(rec.id)
      if(m && m.pieces.every(function(p){return p.el.isConnected && p.el.getAttribute('data-dsh-ink')===rec.id && rowSnapshot(p.el).text===p.text && !closest(p.el,'[data-dsh-crease-hidrow],[data-crease-open="0"],'+SEL.streaming) && !deepQA(SEL.streaming,closest(p.el,SEL.row)).length}))return true
      if(m)restoreMount(rec.id)
      var parts=[],snaps=new Map()
      for(var i=0;i<rec.targets.length;i++){
        var t=rec.targets[i],row=rowByKey(t.key)
        if(!row || t.kind!=='text')return false
        if(!snaps.has(row))snaps.set(row,rowSnapshot(row))
        var found=resolveText(t,snaps.get(row))
        if(!found || found.some(function(p){return !safeText(p.node,true)}))return false
        parts=parts.concat(found)
      }
      if(!parts.length)return false
      m={rec:rec,pieces:[],splits:[],bar:null,extras:[],lists:new Set()};mounts.set(rec.id,m)
      try{mutate(function(){
        var nodes=new Map();mergeParts(parts).forEach(function(p){if(!nodes.has(p.node))nodes.set(p.node,[]);nodes.get(p.node).push(p)})
        nodes.forEach(function(list){list.sort(function(a,b){return b.start-a.start});list.forEach(function(p){wrapPart(p,m)})})
        paintInk(m)
      });return true}catch(e){restoreMount(rec.id);return false}
    }
    function selectionParts() {
      var selection=window.getSelection(),sc=scrollRoot(),out=[]
      if(!selection || selection.isCollapsed || !selection.rangeCount || !sc)return []
      var range=selection.getRangeAt(0)
      if(!under(range.startContainer,sc) || !under(range.endContainer,sc))return []
      eachTextNode(sc,function(node){
        if(!node.length || !range.intersectsNode(node))return
        var start=node===range.startContainer?range.startOffset:0,end=node===range.endContainer?range.endOffset:node.length
        if(end<=start)return
        var clip=visibleClip(node)
        if(!clip || !safeText(node,true)){out.invalid=true;return}
        var edges=boundaries(node.data)
        start=edges.filter(function(v){return v<=start}).pop();end=edges.find(function(v){return v>=end})
        if(end>start)out.push({node:node,start:start,end:end})
      })
      return out.invalid?[]:out
    }
    function hideInkAction() {
      if(selectionFrame!==null){cancelAnimationFrame(selectionFrame);selectionFrame=null}
      pendingInk=null
      if(dom.inkAction){dom.inkAction.remove();dom.inkAction=null}
    }
    function showInkAction() {
      if(disposed || drag || armed || selectingText || (dom.panel && dom.panel.open)){hideInkAction();return}
      var parts=selectionParts()
      if(!parts.length || !parts.some(function(p){return p.node.data.slice(p.start,p.end).trim()})){hideInkAction();return}
      pendingInk={session:sessionId(),targets:parts.map(textTarget)}
      var range=window.getSelection().getRangeAt(0),rects=Array.from(range.getClientRects()).filter(function(r){return r.width && r.height}),r=rects[rects.length-1]
      if(!r){hideInkAction();return}
      if(!dom.inkAction){
        var b=make('button',{type:'button','data-dsh-ink-action':'','aria-label':'隐墨：暂时掩住所选文字'},'隐墨')
        b.addEventListener('pointerdown',function(ev){ev.preventDefault();ev.stopPropagation()})
        b.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();commitInk()})
        document.body.appendChild(b);dom.inkAction=b
      }
      dom.inkAction.style.left=clamp(r.right-55,8,innerWidth-72)+'px'
      dom.inkAction.style.top=clamp(r.bottom+8,8,innerHeight-42)+'px'
    }
    function selectionChanged() {
      if(disposed || selectionFrame!==null)return
      selectionFrame=requestAnimationFrame(function(){selectionFrame=null;showInkAction()})
    }
    function commitInk() {
      var pending=pendingInk
      if(!pending || pending.session!==sessionId()){hideInkAction();return null}
      syncSession()
      var rec={id:uid(),sessionId:sessionId(),schema:6,mode:'ink',label:'隐墨',chars:pending.targets.reduce(function(n,t){return n+Array.from(t.text).length},0),open:false,targets:pending.targets,createdAt:Date.now()}
      hideInkAction()
      if(!ensureInk(rec)){toast('选中的文字已变化，请重新选择');return null}
      records().push(rec);saveStore();window.getSelection().removeAllRanges();return rec
    }
    function inkElement(ev) {
      var path=ev.composedPath?ev.composedPath():[ev.target]
      for(var i=0;i<path.length;i++)if(path[i].nodeType===1 && path[i].hasAttribute('data-dsh-ink'))return path[i]
      return null
    }
    function onInkPointerDown(ev) {
      if(closest(ev.target,'[data-dsh-ink-action]'))return
      hideInkAction();selectingText=ev.button===0
      inkPointer={x:ev.clientX,y:ev.clientY}
    }
    function onInkPointerUp() {selectingText=false;selectionChanged()}
    function inkKey(ev) {
      if(ev.key==='Escape'){hideInkAction();if(dom.panel && dom.panel.open){settingsReturnFocus=true;dom.panel.close();ev.preventDefault()}return}
      var el=inkElement(ev)
      if(!el || ev.target!==el)return
      var rec=records().find(function(r){return r.mode==='ink' && r.id===el.getAttribute('data-dsh-ink')})
      if(!rec)return
      if(ev.key==='Enter' || ev.key===' '){ev.preventDefault();ev.stopPropagation();setOpen(rec,!rec.open)}
      if(ev.key==='Delete'){ev.preventDefault();ev.stopPropagation();removeRecord(rec)}
    }

    function setOpen(rec,open) {
      if(rec.mode!=='ink')releaseInkMounts()
      rec.open = !!open
      var m = mounts.get(rec.id)
      if (m) mutate(function(){paintMount(m)})
      else ensureTargets(rec)
      paintRegions()
      refreshInk();saveStore();writeDiag({last:rec.open?'open':'close'})
    }
    function removeRecord(rec) {
      restoreMount(rec.id)
      var list=records(),i=list.indexOf(rec)
      if(i>=0)list.splice(i,1)
      refreshInk();saveStore();writeDiag({last:'remove'})
    }
    function clearSession() {
      syncSession()
      records().slice().forEach(removeRecord)
      hideInkAction();toast('已恢复本会话的全部折痕与隐墨')
    }
    function scan() {
      if (disposed) return
      syncSession()
      if (!scrollRoot()) return
      records().filter(function(rec){return rec.mode!=='ink'}).concat(records().filter(function(rec){return rec.mode==='ink'})).forEach(function(rec){
        if (!rec || !Array.isArray(rec.targets)) return
        try { ensureTargets(rec) } catch(e) { restoreMount(rec.id) }
      })
      paintRegions()
      observe()
    }
    function schedule() {
      if(drag)drag.previewStamp=null
      if (disposed || applyTimer !== null) return
      applyTimer=setTimeout(function(){applyTimer=null;scan()},220)
    }
    function traceGesture(stage,details) {
      gestureTrace.push(Object.assign({stage:stage,at:Date.now()},details || {}))
      if(gestureTrace.length>12)gestureTrace.shift()
      writeDiag({last:stage})
    }
    function diagnostics() {
      var sc=scrollRoot(), bars=sc?deepQA('['+A.rowBar+']',sc):[]
      return {version:VERSION,styleVersion:document.getElementById(STYLE_ID) && document.getElementById(STYLE_ID).getAttribute('data-dsh-crease-version'),sessionId:sessionId(),folds:records().filter(function(r){return r.mode!=='ink'}).length,inks:records().filter(function(r){return r.mode==='ink'}).length,mounted:mounts.size,barRows:bars.length,hiddenRows:sc?deepQA('['+A.rowHidden+']',sc).length:0,bodies:sc?deepQA('['+A.body+']',sc).length:0,armed:armed,gesture:gestureTrace.slice(),
        bars:bars.map(function(b){var r=b.getBoundingClientRect(),s=getComputedStyle(b);return{tag:b.tagName,width:Math.round(r.width),height:Math.round(r.height),opacity:s.opacity,display:s.display,open:b.getAttribute(A.open),before:getComputedStyle(b,'::before').content}})}
    }
    function writeDiag(extra) {
      try { var out=Object.assign(diagnostics(),extra || {},{stats:lastStats,lastFold:lastFoldDiag});localStorage.setItem(LS_DIAG,JSON.stringify(out)) } catch(e) {}
    }
    function inspectCode() {
      return deepQA('pre,[data-code-block-content]',document).map(function(el){
        var r=el.getBoundingClientRect(),clip=visibleClip(el),n=0;eachTextNode(el,function(){n++})
        return {tag:el.tagName,className:String(el.className),inConversation:!!closest(el,SEL.scroll),anchor:closest(el,SEL.row)?closest(el,SEL.row).getAttribute('data-chat-anchor-key'):null,shadow:el.getRootNode()!==document,textNodes:n,width:Math.round(r.width),height:Math.round(r.height),display:getComputedStyle(el).display,contentVisibility:getComputedStyle(el).contentVisibility,streaming:!!closest(el,SEL.streaming),visible:!!clip && r.width>0 && r.height>0 && overlaps(r,clip)}
      })
    }

    /* ================= 把手 ================= */
    function placeGrip(g) {
      var p = settings.gripPos
      if (p && typeof p.left === 'number' && typeof p.top === 'number') {
        g.style.left = clamp(p.left, 0, window.innerWidth - 40) + 'px'
        g.style.top = clamp(p.top, 0, window.innerHeight - 40) + 'px'
        g.style.right = 'auto'
        g.style.bottom = 'auto'
      }
    }
    function setArmed(v) {
      armed = !!v
      if(armed)hideInkAction()
      if (dom.grip) { if (armed) dom.grip.setAttribute('data-armed', ''); else dom.grip.removeAttribute('data-armed') }
      try {
        if (armed) document.documentElement.setAttribute('data-dsh-crease-armed', '')
        else document.documentElement.removeAttribute('data-dsh-crease-armed')
      } catch (e) { }
    }
    function onGripDown(ev) {
      if (ev.button !== 0) return
      ev.preventDefault()
      var g = dom.grip
      if (!g) return
      var r = g.getBoundingClientRect()
      gripDrag = { sx: ev.clientX, sy: ev.clientY, ox: r.left, oy: r.top, moving: false, armed: armed }
      window.addEventListener('pointermove', onGripMove, true)
      window.addEventListener('pointerup', onGripUp, true)
    }
    function onGripMove(ev) {
      if (!gripDrag) return
      var dx = ev.clientX - gripDrag.sx
      var dy = ev.clientY - gripDrag.sy
      if (!gripDrag.moving && Math.abs(dx) < 5 && Math.abs(dy) < 5) return
      if (gripDrag.armed) {
        var d = gripDrag
        gripDrag = null
        window.removeEventListener('pointermove', onGripMove, true)
        window.removeEventListener('pointerup', onGripUp, true)
        beginMarquee(d.sx, d.sy)
        onMove(ev)
        return
      }
      gripDrag.moving = true
      var g = dom.grip
      if (g) {
        g.setAttribute('data-moving', '')
        g.style.left = clamp(gripDrag.ox + dx, 0, window.innerWidth - 40) + 'px'
        g.style.top = clamp(gripDrag.oy + dy, 0, window.innerHeight - 40) + 'px'
        g.style.right = 'auto'
        g.style.bottom = 'auto'
      }
    }
    function onGripUp(ev) {
      if (!gripDrag) return
      var wasMoving = gripDrag.moving
      var g = dom.grip
      gripDrag = null
      window.removeEventListener('pointermove', onGripMove, true)
      window.removeEventListener('pointerup', onGripUp, true)
      if (g) g.removeAttribute('data-moving')
      if (wasMoving && g) {
        var r = g.getBoundingClientRect()
        settings.gripPos = { left: Math.round(r.left), top: Math.round(r.top) }
        saveStore();placeGear()
      } else if (ev && ev.altKey) {
        setArmed(false)
        openSettings()
      } else {
        setArmed(!armed)
        traceGesture(armed?'armed':'disarmed')
      }
    }
    function onGripMenu(ev) { ev.preventDefault(); ev.stopPropagation(); clearSession() }

    /* ================= 框选 ================= */
    function previewLines() {
      if(!drag || !drag.moved)return
      var sc=scrollRoot(),stamp=[drag.ax,drag.ay,drag.x,drag.y,sc && sc.scrollTop,innerWidth].join(',')
      if(stamp===drag.previewStamp)return
      drag.previewStamp=stamp
      var got=collectLines({left:Math.min(drag.ax,drag.x),right:Math.max(drag.ax,drag.x),top:Math.min(drag.ay,drag.y),bottom:Math.max(drag.ay,drag.y)+1},drag.sx)
      drag.plan=got
      if(!dom.marquee){dom.marquee=make('div',{'data-dsh-crease-marquee':'','aria-hidden':'true'});document.body.appendChild(dom.marquee)}
      while(dom.marquee.children.length>got.boxes.length)dom.marquee.lastChild.remove()
      got.boxes.forEach(function(r,i){var el=dom.marquee.children[i] || dom.marquee.appendChild(make('i'));el.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+(r.right-r.left)+'px;height:'+(r.bottom-r.top)+'px'})
    }
    function hideMarquee() { if (dom.marquee) { dom.marquee.remove(); dom.marquee = null } }
    function autoScrollStep() {
      if (!drag) return
      var sc = scrollRoot()
      if (!sc) return
      var dy = 0
      var bounds = sc.getBoundingClientRect(), top = Math.max(0,bounds.top), bottom = Math.min(innerHeight,bounds.bottom)
      if (drag.y < top + settings.zone) dy = -Math.ceil(settings.speed * clamp(1 - (drag.y-top) / settings.zone,0,1))
      else if (drag.y > bottom - settings.zone) dy = Math.ceil(settings.speed * clamp(1 - (bottom-drag.y) / settings.zone,0,1))
      if (!dy) return
      var before = sc.scrollTop
      sc.scrollTop = before + dy
      var moved = sc.scrollTop - before
      if (moved) drag.ay -= moved
    }
    function beginMarquee(x, y) {
      if (drag) return
      syncSession()
      if(!sessionId()){traceGesture('no-session');toast('正在确认会话，请稍后再折叠');return}
      hideInkAction();var selection=window.getSelection();if(selection)selection.removeAllRanges()
      drag = { sx: x, sy: y, x: x, y: y, ax: x, ay: y, moved: false, frame: 0 }
      window.addEventListener('pointermove', onMove, true)
      window.addEventListener('pointerup', onUp, true)
      window.addEventListener('pointercancel', cancelMarquee, true)
      window.addEventListener('keydown', onKey, true)
      traceGesture('drag-start',{x:x,y:y})
      drag.frame = requestAnimationFrame(onFrame)
    }
    function onFrame() { if (!drag) return; autoScrollStep(); if (drag.moved) previewLines(); drag.frame = requestAnimationFrame(onFrame) }
    function onMove(ev) {
      if (!drag) return
      drag.x = ev.clientX
      drag.y = ev.clientY
      if (Math.abs(drag.x - drag.sx) > settings.minDrag || Math.abs(drag.y - drag.sy) > settings.minDrag) drag.moved = true
      // Geometry preview is coalesced by onFrame; pointermove only records coordinates.
    }
    function endDrag() {
      var d = drag
      drag = null
      if (d) cancelAnimationFrame(d.frame)
      window.removeEventListener('pointermove', onMove, true)
      window.removeEventListener('pointerup', onUp, true)
      window.removeEventListener('pointercancel', cancelMarquee, true)
      window.removeEventListener('keydown', onKey, true)
      hideMarquee()
      return d
    }
    function onUp(ev) {
      if(drag && ev && Number.isFinite(ev.clientX) && Number.isFinite(ev.clientY))onMove(ev)
      var d = endDrag()
      if(!d)return
      if(!d.moved){traceGesture('click-without-drag');return}
      var box = { left: Math.min(d.ax, d.x), top: Math.min(d.ay, d.y), right: Math.max(d.ax, d.x), bottom: Math.max(d.ay, d.y) }
      if(box.bottom===box.top)box.bottom++
      var got = collectLines(box,d.sx),targets=got.list,rec=null
      traceGesture('selection',{parts:targets.length,bands:got.boxes.length,limit:!!got.limit,error:got.error || null})
      if(targets.length){
        rec=foldTargets(targets,got.box,true)
        traceGesture(rec?'fold-created':'fold-rollback',{reason:rec?null:lastFoldDiag && lastFoldDiag.reason})
      } else {
        traceGesture('empty-selection',{reason:got.error || (lastStats && lastStats.columnRejected?'column-boundary':'no-visible-lines')})
        toast(got.limit?'选区太大，请分成几段折叠':got.error?'选行遇到异常，诊断已记录':'这里没有可折叠的完整行，请在正文旁纵向拖动')
      }
      var selection=window.getSelection();if(selection)selection.removeAllRanges()
      suppressClickUntil = Date.now() + 400
      suppressMenuUntil = Date.now() + 600
      setArmed(false)
    }
    function cancelMarquee() {if(drag)traceGesture('drag-cancelled');endDrag();setArmed(false)}
    function onKey(ev) {if(drag && ev.key==='Escape')cancelMarquee()}
    function preventNativeDrag(ev) {if(drag)ev.preventDefault()}
    function onDocDown(ev) {
      var sc=scrollRoot(),path=ev.composedPath?ev.composedPath():[ev.target],target=path[0]
      if(!sc || !under(target,sc))return
      if(closest(target,'button,input,textarea,select,[contenteditable]:not([contenteditable="false"])'))return
      if(ev.button===2 || (ev.button===0 && (ev.altKey || armed))){
        ev.preventDefault()
        beginMarquee(ev.clientX,ev.clientY)
      }
    }
    function eventBar(ev) {
      var path = ev.composedPath ? ev.composedPath() : [ev.target]
      for (var i = 0; i < path.length; i++) {
        if (path[i].nodeType === 1 && path[i].hasAttribute(A.rowBar)) return path[i]
      }
      return null
    }
    function onDocClick(ev) {
      if (Date.now() < suppressClickUntil) { ev.preventDefault(); ev.stopPropagation(); return }
      var ink=inkElement(ev)
      if(ink){
        if(inkPointer && Math.hypot(ev.clientX-inkPointer.x,ev.clientY-inkPointer.y)>5){ev.preventDefault();return}
        var note=records().find(function(r){return r.id===ink.getAttribute('data-dsh-ink')})
        if(note){ev.preventDefault();ev.stopPropagation();if(ev.altKey)removeRecord(note);else setOpen(note,!note.open)}
        return
      }
      var bar = eventBar(ev)
      if (!bar) return
      var r = headerRect(bar), headerRight=r.right
      if (ev.clientY < r.top || ev.clientY > r.bottom || ev.clientX < r.left || ev.clientX > headerRight) return // Expanded content keeps its own link/control behavior.
      var rec = records().find(function (x) { return x.id === bar.getAttribute(A.id) })
      if (!rec) return
      ev.preventDefault(); ev.stopPropagation()
      if (ev.altKey || headerRight - ev.clientX < 26) removeRecord(rec)
      else setOpen(rec, !rec.open)
    }
    function onBarKey(ev) {
      if (ev.key === 'Escape' && armed) { if (drag) endDrag(); setArmed(false); return }
      var bar = eventBar(ev)
      if (!bar || (ev.composedPath ? ev.composedPath()[0] : ev.target) !== bar) return
      var rec = records().find(function (x) { return x.id === bar.getAttribute(A.id) })
      if (!rec) return
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopPropagation(); setOpen(rec, !rec.open) }
      if (ev.key === 'Delete') { ev.preventDefault(); ev.stopPropagation(); removeRecord(rec) }
    }
    function onContextMenu(ev) { if (drag || Date.now() < suppressMenuUntil) ev.preventDefault() }

    /* ================= 生命周期 ================= */
    function gearSvg(size) {
      var NS='http://www.w3.org/2000/svg',svg=document.createElementNS(NS,'svg')
      svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('aria-hidden','true')
      svg.setAttribute('width',String(size));svg.setAttribute('height',String(size))
      function line(x1,y1,x2,y2){var p=document.createElementNS(NS,'line');p.setAttribute('x1',x1);p.setAttribute('y1',y1);p.setAttribute('x2',x2);p.setAttribute('y2',y2);p.setAttribute('stroke','currentColor');p.setAttribute('stroke-width','1.6');p.setAttribute('stroke-linecap','round');svg.appendChild(p)}
      function dot(cx,cy){var c=document.createElementNS(NS,'circle');c.setAttribute('cx',cx);c.setAttribute('cy',cy);c.setAttribute('r','2.1');c.setAttribute('fill','currentColor');svg.appendChild(c)}
      line(4,7,20,7);line(4,12,20,12);line(4,17,20,17);dot(9,7);dot(15,12);dot(7,17)
      return svg
    }
    function placeGear() {
      if(!dom.settingsButton || !dom.grip) return
      try {
        var r=dom.grip.getBoundingClientRect()
        dom.settingsButton.style.left=Math.max(2,Math.round(r.left-23))+'px'
        dom.settingsButton.style.top=Math.round(r.top+6)+'px'
      } catch(e){ }
    }
    function makeGear() {
      if(dom.settingsButton) return
      var b=make('button',{type:'button','data-dsh-crease-gear':'','aria-label':'折痕样式设置'})
      b.setAttribute('title','折痕样式：悬停鲸鱼球时出现；也可以 Alt+点击鲸鱼球')
      b.appendChild(gearSvg(13))
      b.addEventListener('pointerdown',function(ev){ev.stopPropagation()})
      b.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();openSettings()})
      document.body.appendChild(b)
      dom.settingsButton=b
      placeGear()
    }
    function makeGrip() {
      if (dom.grip) return
      var g = make('button', { type: 'button', 'data-dsh-crease-grip': '', 'aria-label': '折痕：拖动挪位 / 点击选择整行折痕 / 右键恢复全部' })
      g.setAttribute('title', '折痕 · 拖动挪位；点击选择整行折痕；Alt+点击 = 样式设置；右键 = 恢复本会话全部折痕')
      g.appendChild(whaleSvg(19))
      g.addEventListener('pointerdown', onGripDown, true)
      g.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation() })
      g.addEventListener('contextmenu', onGripMenu)
      document.body.appendChild(g)
      dom.grip = g
      placeGrip(g)
    }
    function apply(ctx) {
      ctxRef = ctx
      disposed = false
      loadStore()
      syncSession()
      ensureStyle()
      makeGrip()
      makeGear()
      document.addEventListener('selectionchange',selectionChanged)
      document.addEventListener('pointerdown',onInkPointerDown,true)
      document.addEventListener('pointerup',onInkPointerUp,true)
      document.addEventListener('pointercancel',onInkPointerUp,true)
      document.addEventListener('keydown',inkKey,true)
      document.addEventListener('pointerdown', onDocDown, true)
      document.addEventListener('selectstart',preventNativeDrag,true)
      document.addEventListener('dragstart',preventNativeDrag,true)
      document.addEventListener('contextmenu', onContextMenu, true)
      document.addEventListener('click', onDocClick, true)
      document.addEventListener('keydown', onBarKey, true)
      window.addEventListener('resize',scheduleRegions)
      document.addEventListener('scroll',scheduleRegions,true)
      try {
        observer = new MutationObserver(function () { if (muted) return; schedule() })
        observe()
      } catch (e) { }
      ticker = setInterval(schedule, 1500)
      setTimeout(function () { if (!disposed) { scan(); writeDiag({ last: 'boot' }) } }, 400)
      window.__dshCrease = {
        version: VERSION,
        debug: function () { return diagnostics() },
        diag: function () { return { current: diagnostics(), lastFold: lastFoldDiag, stats: lastStats } },
        inspectCode: inspectCode,
        folds: function () { return JSON.parse(JSON.stringify(records().filter(function(r){return r.mode!=='ink'}))) },
        inks: function () { return JSON.parse(JSON.stringify(records().filter(function(r){return r.mode==='ink'}))) },
        openSettings: openSettings,
        getStyle: function(){var out={};Object.keys(STYLE_DEFAULTS).forEach(function(k){out[k]=settings[k]});return out},
        updateStyle: updateStyle,
        restoreAll: clearSession,
        clear: clearSession
      }
      return function () {
        disposed = true
        if (drag) endDrag()
        try { if (observer) observer.disconnect() } catch (e) { }
        try { clearInterval(ticker) } catch (e) { }
        try { if (applyTimer !== null) clearTimeout(applyTimer) } catch (e) { }
        document.removeEventListener('selectionchange',selectionChanged)
        document.removeEventListener('pointerdown',onInkPointerDown,true)
        document.removeEventListener('pointerdown',settingsOutside,true)
        document.removeEventListener('pointerup',onInkPointerUp,true)
        document.removeEventListener('pointercancel',onInkPointerUp,true)
        document.removeEventListener('keydown',inkKey,true)
        if(selectionFrame!==null){cancelAnimationFrame(selectionFrame);selectionFrame=null}
        hideInkAction()
        document.removeEventListener('pointerdown', onDocDown, true)
        document.removeEventListener('selectstart',preventNativeDrag,true)
        document.removeEventListener('dragstart',preventNativeDrag,true)
        document.removeEventListener('contextmenu', onContextMenu, true)
        document.removeEventListener('click', onDocClick, true)
        document.removeEventListener('keydown', onBarKey, true)
        window.removeEventListener('resize',scheduleRegions)
        document.removeEventListener('scroll',scheduleRegions,true)
        if(regionFrame!==null){cancelAnimationFrame(regionFrame);regionFrame=null}
        window.removeEventListener('pointermove', onMove, true)
        window.removeEventListener('pointerup', onUp, true)
      window.removeEventListener('pointercancel', cancelMarquee, true)
        window.removeEventListener('keydown', onKey, true)
        window.removeEventListener('pointermove', onGripMove, true)
        window.removeEventListener('pointerup', onGripUp, true)
        setArmed(false)
        try { Array.from(mounts.keys()).forEach(restoreMount) } catch (e) { }
        shadowSheets.forEach(function (sheet, root) { try { root.adoptedStyleSheets = root.adoptedStyleSheets.filter(function (x) { return x !== sheet }) } catch (e) {} })
        shadowSheets.clear()
        hideMarquee()
        ;['region','panel','settingsButton'].forEach(function(k){if(dom[k]){dom[k].remove();dom[k]=null}})
        if (dom.toast) { dom.toast.remove(); dom.toast = null }
        if (dom.grip) { dom.grip.remove(); dom.grip = null }
        var st = document.getElementById(STYLE_ID)
        if (st) st.remove()
        try { delete window.__dshCrease } catch (e) { }
      }
    }

    exports.name = 'dsh-crease'
    exports.inject = ['conversation', 'sessions', 'locale', 'uiSession']
    exports.apply = apply
    return module.exports
  }
})
