// document.addEventListener("DOMContentLoaded", function () {
//     const section = document.querySelector("#feature");
//     const contentWrapper = document.querySelector(".tab_wrap");
//     const tabs = document.querySelectorAll(".tab_label");
//     const indicators = document.querySelector(".carousel-indicators");
//     const tabSwitches = document.querySelectorAll(".tab_switch");

//     let currentIndex = 0;
//     const totalTabs = tabs.length;
//     let isScrolling = false;

//     // インジケーター（丸）を作成
//     for (let i = 0; i < totalTabs; i++) {
//         const dot = document.createElement("div");
//         dot.classList.add("indicator-dot");
//         if (i === 0) dot.classList.add("active");
//         indicators.appendChild(dot);
//     }

//     const dots = document.querySelectorAll(".indicator-dot");

//     function updateTab(index) {
//         tabSwitches[index].checked = true;

//         tabs.forEach((tab, i) => {
//             tab.classList.toggle("active", i === index);
//             dots[i].classList.toggle("active", i === index);
//         });

//         const scrollAmount = -index * 100;
//         contentWrapper.style.transform = `translateX(${scrollAmount}vw)`;
//     }

//     function handleScroll(event) {
//         if (isScrolling) return;
//         isScrolling = true;

//         setTimeout(() => {
//             isScrolling = false;
//         }, 500);

//         if (event.deltaY > 0 && currentIndex < totalTabs - 1) {
//             currentIndex++;
//         } else if (event.deltaY < 0 && currentIndex > 0) {
//             currentIndex--;
//         }

//         updateTab(currentIndex);
//     }

//     window.addEventListener("wheel", handleScroll);
// });

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#feature");
    const tabWrap = document.querySelector(".tab_wrap");
    const tabs = document.querySelectorAll(".tab_label");
    const contents = document.querySelectorAll(".tab_content");
    const indicators = document.createElement("div");
    
    // indicators.classList.add("indicators");
    tabWrap.appendChild(indicators);

    tabs.forEach((tab, index) => {
        const dot = document.createElement("div");
        dot.classList.add("indicator");
        if (index === 0) dot.classList.add("active");
        indicators.appendChild(dot);
    });

    const indicatorDots = document.querySelectorAll(".indicator");
    let isScrolling = false;

    function handleScroll(event) {
        if (isScrolling) return;
        isScrolling = true;

        let activeIndex = Array.from(contents).findIndex(content => content.classList.contains("active"));
        if (event.deltaY > 0 && activeIndex < contents.length - 1) {
            activeIndex++;
        } else if (event.deltaY < 0 && activeIndex > 0) {
            activeIndex--;
        }
        
        updateActiveTab(activeIndex);
        setTimeout(() => { isScrolling = false; }, 500);
    }

    function updateActiveTab(index) {
        contents.forEach((content, i) => {
            content.classList.toggle("active", i === index);
        });
        tabs.forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });
        indicatorDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    section.addEventListener("wheel", handleScroll);
});

