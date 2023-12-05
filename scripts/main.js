document.addEventListener("DOMContentLoaded", function () {

    // valorant data
    const data = [
        {
            "Category": "Deulist",
            "Agent": "Reyna",
            "Hours": 45.0,
            "Matches": 82.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png"
        },
        {
            "Category": "Deulist",
            "Agent": "Jett",
            "Hours": 37.0,
            "Matches": 66.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"
        },
        {
            "Category": "Sentinel",
            "Agent": "Sage",
            "Hours": 33.0,
            "Matches": 59.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png"
        },
        {
            "Category": "Deulist",
            "Agent": "Raze",
            "Hours": 26.0,
            "Matches": 47.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"
        },
        {
            "Category": "Controller",
            "Agent": "Omen",
            "Hours": 24.0,
            "Matches": 41.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png"
        },
        {
            "Category": "Initiator",
            "Agent": "Gekko",
            "Hours": 22.0,
            "Matches": 42.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png"
        },
        {
            "Category": "Initiator",
            "Agent": "Skye",
            "Hours": 12.0,
            "Matches": 23.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png"
        },
        {
            "Category": "Sentinel",
            "Agent": "Deadlock",
            "Hours": 10.0,
            "Matches": 18.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png"
        },
        {
            "Category": "Sentinel",
            "Agent": "Killjoy",
            "Hours": 6.3,
            "Matches": 11.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png"
        },
        {
            "Category": "Controller",
            "Agent": "Brimstone",
            "Hours": 3.9,
            "Matches": 7.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png"
        },
        {
            "Category": "Deulist",
            "Agent": "Neon",
            "Hours": 3.6,
            "Matches": 7.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png"
        },
        {
            "Category": "Initiator",
            "Agent": "Fade",
            "Hours": 1.0,
            "Matches": 2.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png"
        },
        {
            "Category": "Initiator",
            "Agent": "Sova",
            "Hours": 0.6,
            "Matches": 1.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png"
        },
        {
            "Category": "Deulist",
            "Agent": "Yoru",
            "Hours": 0.4,
            "Matches": 1.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png"
        },
        {
            "Category": "Sentinel",
            "Agent": "Chamber",
            "Hours": 0.3,
            "Matches": 1.0,
            "Picture": "https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"
        }
    ];

    // width & height of the visualization
    const margin = { top: 30, right: 150, bottom: 70, left: 60 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // SVG
    const svg = d3.select("#visualization").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // ranges
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Matches)])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Hours)])
        .range([height, 0]);

    // axes
    const xAxis = d3.axisBottom(xScale),
        yAxis = d3.axisLeft(yScale);

    // X axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    // X axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2 + margin.left + 285)
        .attr("y", height + margin.top + 20)
        .text("Matches");


    // Y axis
    svg.append("g")
        .call(yAxis);

    // Y axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 15)
        .attr("x", -margin.top + 10)
        .text("Hours Played");

    // tooltip
    const tooltip = d3.select("body").append("div")
        .attr("id", "tooltip")

    // filter function
    window.filterCategory = function (category) {
        let filteredData = category === 'All' ? data : data.filter(d => d.Category === category);

        // filter
        dots = svg.selectAll(".dot")
            .data(filteredData, d => d.Agent);

        // remove unneeded data
        dots.exit().remove();

        // filter new data
        const dotsEnter = dots.enter().append("circle")
            .attr("class", "dot")
            .attr("r", 6);

        // enter and update data
        dotsEnter.merge(dots)
            .attr("cx", d => xScale(d.Matches))
            .attr("cy", d => yScale(d.Hours))
            .attr("fill", d => {
                switch (d.Category) {
                    case "Deulist": return "#364966";
                    case "Sentinel": return "#042e27";
                    case "Controller": return "#dc3d4b";
                    case "Initiator": return "#b78460";
                    default: return "#9957bc";
                }
            });

        // hover
        dotsEnter.on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`<strong>Agent:</strong> ${d.Agent}<br/><strong>Hours:</strong> ${d.Hours}<br/><strong>Matches:</strong> ${d.Matches}<br/><img src='${d.Picture}' alt='${d.Agent}' style='width:100px; height:100px;'>`)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        });
        // fade
        dotsEnter.on("mouseout", function () {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    };

    // refresh
    filterCategory('All');
});

    // smooth scroll to visualization
    function scrollToVisualization() {
        document.getElementById('visualization').scrollIntoView({ behavior: 'smooth' });
    }