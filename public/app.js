
$('#scrapeButton').click(()=>{
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(()=>{
        location.reload()
    })
})
$('#clear').click(()=>{
    $.ajax({
        method: "GET",
        url: "/api/clear"
    }).then((res)=>{
        console.log(res)
        location.reload()
    })
})
