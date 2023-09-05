/*! For license information please see 651.js.LICENSE.txt */
(self.webpackChunkfrontend_performance_basecamp=self.webpackChunkfrontend_performance_basecamp||[]).push([[651],{7166:(e,s)=>{var t;!function(){"use strict";var C={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(this&&this[t]||t);else if(Array.isArray(t))e.push(r.apply(this,t));else if("object"===i)if(t.toString===Object.prototype.toString)for(var c in t)C.call(t,c)&&t[c]&&e.push(this&&this[c]||c);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()},1651:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>y});var C=t(5893),r=t(7294),i=t(9711),c=t(7166),a=t.n(c),n=t(3925),o=t(7571),l=t(4147);const p=({title:e,imageSrc:s})=>(0,C.jsxs)("div",Object.assign({className:"zdg2m72yokju8JiiscTn"},{children:[(0,C.jsx)("img",{className:"MVADUkSxdsx9ydTG1Vi8",src:s}),(0,C.jsx)("div",{className:"_AyjtSIfNN_RTsde7ru2"}),(0,C.jsx)("h4",Object.assign({className:"lOXz8Y_68qXjaZ2q3ygh"},{children:e}))]})),x={cursor:"WUhJpsfkDWyKYP4t_PkZ","wave-text":"IBeeqQKHKuvNt6JDVu2Q"},h=({text:e=""})=>{const[...s]=e,t=(()=>{const[e,s]=(0,r.useState)({clientX:0,clientY:0,pageX:0,pageY:0,offsetX:0,offsetY:0}),t=e=>{const{clientX:t,clientY:C,pageX:r,pageY:i,offsetX:c,offsetY:a}=e;s({clientX:t,clientY:C,pageX:r,pageY:i,offsetX:c,offsetY:a})};return(0,r.useEffect)((()=>(window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)})),[]),e})(),i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{i.current&&(i.current.style.top=`${t.pageY}px`,i.current.style.left=`${t.pageX}px`)}),[t]),(0,C.jsx)("div",Object.assign({ref:i,className:x.cursor},{children:s.map(((e,s)=>(0,C.jsx)("span",Object.assign({className:x.character},{children:e}),s)))}))},g=({wrapperRef:e})=>{const s=(0,r.useRef)(null);return t=()=>{const t=e.current,C=s.current;if(!t||!C)return;const r=(window.scrollY+.8*window.innerHeight-t.offsetTop)/t.offsetHeight,i=s.current.getTotalLength(),c=(a=i-i*r,n=i,Math.min(Math.max(a,0),n));var a,n;C.style.strokeDasharray=`${c}`},(0,r.useEffect)((()=>(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t))),[]),(0,C.jsx)("svg",Object.assign({className:"n_PIzT_Vj3XW_yuI7gmD",width:"924",height:"1691",viewBox:"0 0 924 1691",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,C.jsx)("path",{ref:s,strokeDasharray:s.current?s.current.getTotalLength():0,d:"M694.643 0C694.643 89.6504 694.643 274.548 694.643 296.935C694.643 324.918 720.609 351.347 767.133 331.655C813.656 311.963 823.393 306.781 827.721 291.234C832.049 275.688 830.967 268.433 829.344 263.251C827.721 258.069 825.016 254.441 816.361 256.514C807.705 258.587 802.836 259.105 801.214 263.251C799.591 267.397 801.214 271.024 803.918 273.097C805.181 274.306 809.004 275.999 814.197 273.097C820.688 269.47 821.229 268.433 823.934 264.806C826.639 261.178 827.721 239.932 827.721 227.494C827.721 215.057 826.098 202.102 825.016 197.438C823.934 192.774 822.311 189.665 825.016 188.629C827.721 187.592 831.508 188.11 837.999 192.256C844.491 196.402 862.343 205.73 867.212 210.394C872.08 215.057 874.785 217.648 872.08 218.685C869.376 219.721 845.573 205.211 841.786 202.62C837.999 200.029 833.131 197.438 832.049 197.438C830.967 197.438 833.672 202.102 839.622 206.248C845.573 210.394 869.917 225.94 872.08 227.494C874.244 229.049 874.785 254.441 872.08 266.36C869.376 278.279 865.048 286.57 859.638 290.198C854.228 293.825 847.196 294.344 845.573 291.234C843.95 288.125 843.95 288.125 842.868 283.979C841.786 279.834 845.032 277.243 849.36 277.243C853.688 277.243 861.802 275.17 876.408 283.979C891.014 292.789 901.834 303.671 905.621 315.072C909.407 326.473 912.653 372.075 889.932 396.949C867.212 421.823 782.28 472.608 657.316 461.207C532.352 449.807 499.353 502.146 458.24 521.32C417.126 540.494 385.209 574.177 332.194 576.25C279.179 578.323 230.492 567.959 213.181 563.295C195.87 558.631 189.378 560.704 186.673 560.704C183.968 560.704 175.854 564.331 173.69 568.477C171.526 572.623 170.444 580.914 173.149 581.951C175.854 582.987 176.936 584.023 181.264 582.987C185.591 581.951 190.46 575.732 191.542 569.514C192.624 563.295 193.165 555.522 192.083 548.267C191.001 541.012 187.755 523.911 186.132 516.138C184.509 508.365 181.805 496.446 180.182 495.409C178.559 494.373 171.526 502.146 159.625 502.664C147.724 503.183 129.872 501.628 133.117 499.555C136.363 497.482 152.592 499.555 160.707 498.519C168.821 497.482 178.559 493.337 178.018 491.782C177.477 490.227 167.199 495.409 156.92 495.928C146.642 496.446 132.036 493.855 129.331 495.928C126.626 498 133.658 508.365 135.281 515.62C136.904 522.875 147.724 557.595 147.724 565.886C147.724 574.177 139.068 568.995 130.954 575.732C122.839 582.469 120.134 590.76 124.462 592.833C128.79 594.906 142.855 590.242 146.101 584.023C149.346 577.805 148.806 576.768 148.806 573.141C148.806 569.514 141.773 567.441 132.036 570.032C122.298 572.623 100.118 580.396 92.0038 586.096C83.8893 591.797 77.9387 596.979 77.3977 602.161C76.8567 607.343 79.0206 613.043 80.6435 614.08C82.2664 615.116 88.758 612.525 89.8399 610.452C90.9218 608.379 95.7905 604.234 95.2496 596.979C94.7086 589.724 94.1678 584.542 92.0038 577.287C89.8399 570.032 61.1686 529.611 57.9228 527.538C54.6769 525.466 55.7589 532.721 52.5131 534.793C49.2673 536.866 48.1853 539.975 36.284 544.121C24.3827 548.267 16.2682 546.194 13.5633 548.267C10.8585 550.34 16.8091 558.113 20.5959 563.295C24.3827 568.477 58.4637 613.561 59.0047 616.671C59.5457 619.78 53.054 613.043 41.1527 616.671C29.2514 620.298 29.2514 623.407 28.7105 628.59C28.1695 633.772 37.9069 635.326 41.1527 635.326C44.3985 635.326 54.677 631.181 56.2999 628.59C57.9228 625.998 55.2179 621.335 48.1853 620.816C41.1527 620.298 25.4646 624.962 18.4321 631.699C11.3995 638.436 -14.0261 676.783 13.5633 708.912C41.1527 741.041 123.38 797.526 317.588 795.453C511.795 793.381 602.678 830.692 648.66 848.311C694.643 865.93 713.577 857.12 726.019 863.857C738.461 870.594 746.576 877.849 743.33 883.549C740.084 889.249 728.183 883.549 723.314 878.367C718.445 873.185 721.15 868.521 721.15 866.966C721.15 865.412 727.642 859.711 733.593 861.784C739.543 863.857 746.035 869.557 747.658 875.776C749.281 881.995 747.658 886.658 749.822 885.104C751.985 883.549 781.198 814.109 783.362 812.036C785.525 809.963 786.607 807.89 787.689 809.445C788.771 811 799.591 824.991 808.787 829.655C817.984 834.319 827.721 831.728 829.344 833.283C830.967 834.837 807.164 886.658 799.05 894.432C790.935 902.205 782.821 907.905 774.165 904.796C765.51 901.687 766.592 901.168 765.51 897.023C764.428 892.877 773.624 888.213 780.657 889.249C787.689 890.286 790.394 889.249 804.459 897.023C818.525 904.796 833.131 917.233 835.295 921.379C837.458 925.524 838.54 929.152 838.54 931.743C838.54 934.334 827.721 936.925 820.147 934.334C812.574 931.743 807.164 926.561 808.246 923.97C809.328 921.379 812.574 917.751 817.984 918.787C823.393 919.824 825.962 919.306 832.049 923.97C838.136 928.633 840.163 933.297 842.327 931.743C844.491 930.188 887.769 880.44 891.014 879.922C894.26 879.403 894.801 890.286 899.129 894.432C903.457 898.577 907.784 906.35 920.768 912.051C933.751 917.751 886.146 950.917 879.654 955.58C873.162 960.244 864.507 967.499 856.933 965.945C849.36 964.39 840.163 961.799 842.327 957.653C844.491 953.508 850.983 945.216 860.72 950.398C870.458 955.58 876.949 965.945 882.9 976.827C888.85 987.709 898.047 1023.98 866.671 1059.22C835.295 1094.46 607.006 1067 481.501 1132.29C355.996 1197.58 351.128 1225.05 335.981 1247.33C320.834 1269.62 320.293 1284.64 286.752 1293.97C253.212 1303.3 231.574 1286.72 208.853 1247.33C186.132 1207.95 175.854 1203.8 154.215 1204.32C132.576 1204.84 133.658 1206.39 128.79 1211.06C123.921 1215.72 129.872 1223.5 138.527 1221.94C147.183 1220.39 150.428 1215.72 150.969 1208.47C151.51 1201.21 152.592 1188.78 147.724 1171.67C142.855 1154.57 143.937 1153.02 141.232 1151.46C138.527 1149.91 93.6267 1141.62 94.1677 1136.95C94.7087 1132.29 132.576 1146.28 136.904 1144.73C141.232 1143.17 140.691 1141.1 128.79 1136.95C116.888 1132.81 86.5941 1120.89 84.9712 1127.11C83.3483 1133.33 102.823 1170.12 103.364 1183.59C103.905 1197.07 110.938 1204.32 94.1677 1214.69C77.3977 1225.05 78.4796 1202.25 84.9712 1200.18C91.4629 1198.1 99.5774 1192.4 110.397 1197.58C121.216 1202.77 116.347 1228.16 103.364 1247.33C90.3809 1266.51 78.4796 1263.92 69.8241 1282.05C60.2819 1302.05 82.8074 1300.19 76.3157 1316.77C74.5717 1323.51 42.0183 1350.77 49.8083 1372.74C59.5457 1400.21 76.8567 1528.72 302.441 1544.27C528.024 1559.81 648.119 1589.87 669.217 1618.89C690.315 1647.91 685.987 1642.73 684.905 1652.57C683.823 1662.42 680.578 1663.97 682.741 1668.64C684.905 1673.3 691.397 1684.7 704.38 1686.78C717.363 1688.85 719.527 1691.96 722.773 1688.33C726.019 1684.7 720.609 1680.04 727.101 1675.38C733.593 1670.71 746.576 1661.9 754.149 1657.24C761.723 1652.57 766.592 1648.43 766.051 1642.73C765.51 1637.03 760.1 1631.85 761.723 1630.81C763.346 1629.77 770.378 1633.92 773.083 1630.81C775.788 1627.7 773.083 1615.26 775.788 1612.15C778.493 1609.04 784.444 1604.38 783.362 1600.75C782.28 1597.13 778.493 1592.98 775.788 1587.8C773.083 1582.62 770.378 1567.07 773.083 1561.37C775.788 1555.67 767.133 1546.34 756.854 1547.9C746.576 1549.45 727.642 1552.04 722.773 1559.3C717.904 1566.55 717.363 1568.62 720.068 1571.73C722.773 1574.84 748.74 1568.62 755.231 1570.18C761.723 1571.73 765.51 1575.36 761.723 1576.4C757.936 1577.43 740.084 1576.4 730.347 1576.4C720.609 1576.4 711.954 1578.99 710.872 1581.58C709.79 1584.17 702.757 1589.35 704.921 1592.98C707.085 1596.61 716.822 1590.91 723.855 1591.94C730.888 1592.98 749.281 1601.79 747.117 1605.42C744.953 1609.04 732.511 1595.05 724.937 1595.05C717.363 1595.05 709.249 1594.02 704.921 1599.72C700.593 1605.42 696.807 1610.6 703.298 1612.15C709.79 1613.71 729.265 1620.44 732.511 1625.11C735.756 1629.77 740.084 1627.18 739.543 1625.63C739.002 1624.07 728.724 1616.3 720.609 1614.74C712.495 1613.19 702.757 1612.67 700.052 1616.82C697.348 1620.96 694.643 1627.7 698.971 1628.74C703.298 1629.77 722.773 1628.74 723.855 1634.44C724.937 1640.14 692.479 1638.58 688.692 1629.77C684.905 1620.96 687.61 1600.75 692.479 1590.91C697.348 1581.06 719.527 1552.04 728.724 1544.27C737.92 1536.49 739.543 1547.38 742.789 1544.27C746.035 1541.16 748.74 1525.09 746.576 1522.5C744.412 1519.91 742.789 1520.95 728.724 1511.1C714.659 1501.26 707.626 1490.37 704.921 1476.38C702.216 1462.39 701.675 1454.1 706.544 1439.59C711.413 1425.08 723.314 1411.61 731.97 1405.91C740.625 1400.21 753.067 1393.99 765.51 1394.5C777.952 1395.02 789.312 1394.5 809.869 1405.91C830.426 1417.31 837.999 1435.96 840.163 1446.84C842.327 1457.73 842.327 1466.54 838.54 1476.38C834.754 1486.23 830.426 1498.15 821.229 1506.96C812.033 1515.77 801.214 1521.98 788.771 1524.06C776.329 1526.13 766.051 1524.06 763.346 1525.09C760.641 1526.13 761.182 1533.39 760.641 1535.98C760.1 1538.57 762.264 1540.64 762.805 1540.12C763.346 1539.6 764.969 1540.64 764.969 1530.79C764.969 1520.95 764.428 1517.84 766.051 1517.84C767.674 1517.84 783.362 1516.28 790.394 1513.69C797.427 1511.1 808.246 1506.44 812.574 1501.77C816.902 1497.11 823.934 1488.82 826.639 1480.53C829.344 1472.24 831.508 1462.91 830.426 1455.65C829.344 1448.4 825.557 1437.52 818.525 1427.67C811.492 1417.82 797.427 1409.53 784.444 1405.91C771.46 1402.28 762.264 1402.8 750.904 1407.98C739.543 1413.16 735.756 1414.72 726.56 1425.08C717.363 1435.44 713.577 1449.44 713.036 1457.21C712.495 1464.98 715.741 1478.97 717.904 1483.12C720.068 1487.26 725.478 1494.52 733.593 1500.74C740.084 1505.71 746.756 1509.72 749.281 1511.1",stroke:"white"})}));var t},u="rPx5VpX5G_Cq2QF_y9oi";var f=t(299),d=t(5144),m=t(8633),j=t(493),w=t(6109),v=t(4667);const b=()=>(0,C.jsxs)("picture",{children:[(0,C.jsx)("source",{type:"image/webp",media:"(max-width: 375px)",srcSet:`${j}, ${w} 2x`}),(0,C.jsx)("source",{type:"image/webp",media:"(max-width: 768px)",srcSet:`${w}, ${v} 2x`}),(0,C.jsx)("source",{type:"image/we",media:"(min-width: 769px)",srcSet:v}),(0,C.jsx)("source",{media:"(max-width: 375px)",srcSet:`${f}, ${d} 2x`}),(0,C.jsx)("source",{media:"(max-width: 768px)",srcSet:`${d}, ${m} 2x`}),(0,C.jsx)("source",{media:"(min-width: 769px)",srcSet:m}),(0,C.jsx)("img",{className:"reGVHqjChE7eFTrKZ77g",src:m})]}),y=()=>{const e=(0,r.useRef)(null);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("section",Object.assign({className:"V7ZLAHZUUJFyxa0EsiNQ"},{children:[(0,C.jsx)(b,{}),(0,C.jsxs)("div",Object.assign({className:"iPl0xvdMIi87JktxgLQg"},{children:[(0,C.jsx)("h1",Object.assign({className:"ZPMqi0uxI0Sxj34ZckWZ"},{children:"Memegle"})),(0,C.jsx)("h3",Object.assign({className:"FMzHGtYUXIBQrRcof3DX"},{children:"gif search engine for you"}))]})),(0,C.jsx)(i.rU,Object.assign({to:"/search"},{children:(0,C.jsx)("button",Object.assign({className:a()("n0jmvMqZoQB_x3tlKAoU",u)},{children:"start search"}))}))]})),(0,C.jsxs)("section",Object.assign({ref:e,className:"ioeQy4JmiSptpX9wQ5hz"},{children:[(0,C.jsx)(g,{wrapperRef:e}),(0,C.jsxs)("div",Object.assign({className:"vT74MgPXVo3yVnRydeQf"},{children:[(0,C.jsx)("h2",Object.assign({className:"Ko_sO72rmgBiSTBza_Cp"},{children:"Features"})),(0,C.jsxs)("div",Object.assign({className:"_IGtPzs7LvTZOW2FuOh1"},{children:[(0,C.jsx)(p,{title:"See trending gif",imageSrc:n}),(0,C.jsx)(p,{title:"Find gif for free",imageSrc:o}),(0,C.jsx)(p,{title:"Free for everyone",imageSrc:l})]})),(0,C.jsx)(i.rU,Object.assign({to:"/search"},{children:(0,C.jsx)("button",Object.assign({className:u},{children:"start search"}))}))]}))]})),(0,C.jsx)(h,{text:"memegle"})]})}},7571:(e,s,t)=>{"use strict";e.exports=t.p+"static/find.gif"},4147:(e,s,t)=>{"use strict";e.exports=t.p+"static/free.gif"},8633:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-1980.png"},4667:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-1980.webp"},299:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-375.png"},493:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-375.webp"},5144:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-768.png"},6109:(e,s,t)=>{"use strict";e.exports=t.p+"static/hero-768.webp"},3925:(e,s,t)=>{"use strict";e.exports=t.p+"static/trending.gif"}}]);
//# sourceMappingURL=651.js.map