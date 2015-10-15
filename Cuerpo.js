(function(){
  var comunasPaths=[
  {
    id:"HI",
    n: "Hemisferio Izquierdo",
    d:"M175.7,408.2c2.4-3.5,5.1-6.5,10.4-9.6 c5.4-3.1,4.4-4.7,6.9-9.6c2.4-4.9,4.7-18.7,8.2-26.7c3.5-8,3.6-14.3,7.8-32.5c4.2-18.2,11.1-30.7,11.1-30.7 c5.6-7.1,7.3-16.5,7.3-16.5c0.4-9.3,5.1-30,5.1-30c1.6-4.7,1.3-11.3,1.3-11.3c-1.5-8.5-1.3-20.3-1.3-20.3 c5.1-46.1,37.6-36.7,37.6-36.7c7.1-0.2,22.9-15.6,25.1-19.2c2.2-3.8-0.4-19.8-0.4-19.8c-2-1.8-2.2-12.5-2.2-12.5 c-4.7,0.7-5.3-9.8-5.3-9.8c-2-12.9,3.5-10.4,3.5-10.4c-3.1-33.2,15.1-37.8,21.1-38.3v360.5h-0.9c2.4,24.9-12,71-12,84.4 s-6.2,40.1-8,55.6c-1.6,15.4-4,16.2,0,36.1c4,20.2-6.4,53.6-7.4,63.6c-1.1,10-2.9,22.2-2.4,26.1c0.5,4,2.4,12.7,0.5,18.2 c-1.6,5.4,1.1,12,1.1,12c4.5,6-1.6,15.4-5.6,16.2c-4,0.7-10.2,4.7-10.2,4.7c-1.6,10-11.4,13.4-11.4,13.4c-7.4,5.4-12,0.7-12,0.7 c-21.6-3.3-0.5-21.4,5.1-26.1s12.5-17.4,13.6-24.9c1.1-7.4,2.9-20.2-1.6-39.6c-4.5-19.4-6.2-61.6-5.6-73.7c0.5-12,4-36.1,4-46.3 c0-10,2.9-23.4-2.4-47.6c-5.1-24.2-4-61-3.5-78.4c0.5-17.4,10.2-58.3,10.2-67c0-8.7,3.5-33.4,3.5-33.4c4-24.2-6.9-60.3-6.9-60.3 c-1.1,2-12,36.1-12,36.1c1.1,13.4-16,45.6-16,45.6c-5.1,10-18.7,40.9-18.7,40.9c-0.5,2.7-2.2,9.3-2.5,13.6 c-0.2,4.4-1.1,5.8-1.8,10.9c-0.9,5.1-5.4,16.2-6,18c-0.5,1.8-1.3,4.9-1.1,8c0.2,3.3-0.7,14-0.7,14c-0.4,3.5-2.9,3.8-2.9,3.8 c-1.5-0.2-1.5-1.6-1.5-1.6c-0.7-1.3,0-19.2,0-19.8c0-0.7-1.1-1.6-1.1,0c0,1.5-6.7,23.6-6.7,23.6c-0.7,5.1-3.8,4.5-3.8,4.5 c-1.6-0.7-1.5-4-1.1-4.9c0.5-0.9,4.2-21.1,4.5-23.4s-0.9-1.6-0.9-1.6l-8.4,20.3c-1.5,6.4-4.5,5.4-4.5,5.4c-2.4-1.5,2-12,2-12 l2.9-14.3c0,0-4.7,7.4-6.7,12.3c-2,4.9-4.7,4.4-4.7,4.4s0,0-0.2-0.2c-2.5-3.1,8.7-29.6,9.8-32c1.1-2.4-4.5,0.7-6.7,2.9 c-2.2,2.2-5.8,0.2-6.2-1.8C164.1,418.5,173.2,411.6,175.7,408.2L175.7,408.2z"
  },
  {
    id:"HD",
    n: "Hemisferio Derecho",
    d:"M447.8,408.2c-2.4-3.5-5.1-6.5-10.4-9.6 c-5.4-3.1-4.4-4.7-6.9-9.6c-2.4-4.9-4.7-18.7-8.2-26.7c-3.5-8-3.6-14.3-7.8-32.5c-4.2-18.2-11.1-30.7-11.1-30.7 c-5.6-7.1-7.3-16.5-7.3-16.5c-0.4-9.3-5.1-30-5.1-30c-1.6-4.7-1.3-11.3-1.3-11.3c1.5-8.5,1.3-20.3,1.3-20.3 c-5.1-46.1-37.6-36.7-37.6-36.7c-7.1-0.2-22.9-15.6-25.1-19.2c-2.2-3.8,0.4-19.8,0.4-19.8c2-1.8,2.2-12.5,2.2-12.5 c4.7,0.7,5.3-9.8,5.3-9.8c2-12.9-3.5-10.4-3.5-10.4c3.1-33.2-15.1-37.8-21.1-38.3v360.5h0.9c-2.4,24.9,12,71,12,84.4 c0,13.4,6.2,40.1,8,55.6c1.6,15.4,4,16.2,0,36.1c-4,20.2,6.4,53.6,7.4,63.6c1.1,10,2.9,22.2,2.4,26.1c-0.5,4-2.4,12.7-0.5,18.2 c1.6,5.4-1.1,12-1.1,12c-4.5,6,1.6,15.4,5.6,16.2c4,0.7,10.2,4.7,10.2,4.7c1.6,10,11.4,13.4,11.4,13.4c7.4,5.4,12,0.7,12,0.7 c21.6-3.3,0.5-21.4-5.1-26.1s-12.5-17.4-13.6-24.9c-1.1-7.4-2.9-20.2,1.6-39.6c4.5-19.4,6.2-61.6,5.6-73.7c-0.5-12-4-36.1-4-46.3 c0-10-2.9-23.4,2.4-47.6c5.1-24.2,4-61,3.5-78.4c-0.5-17.4-10.2-58.3-10.2-67s-3.5-33.4-3.5-33.4c-4-24.2,6.9-60.3,6.9-60.3 c1.1,2,12,36.1,12,36.1c-1.1,13.4,16,45.6,16,45.6c5.1,10,18.7,40.9,18.7,40.9c0.5,2.7,2.2,9.3,2.5,13.6c0.2,4.4,1.1,5.8,1.8,10.9 c0.9,5.1,5.4,16.2,6,18c0.5,1.8,1.3,4.9,1.1,8c-0.2,3.3,0.7,14,0.7,14c0.4,3.5,2.9,3.8,2.9,3.8c1.5-0.2,1.5-1.6,1.5-1.6 c0.7-1.3,0-19.2,0-19.8c0-0.7,1.1-1.6,1.1,0c0,1.5,6.7,23.6,6.7,23.6c0.7,5.1,3.8,4.5,3.8,4.5c1.6-0.7,1.5-4,1.1-4.9 c-0.5-0.9-4.2-21.1-4.5-23.4c-0.4-2.4,0.9-1.6,0.9-1.6l8.4,20.3c1.5,6.4,4.5,5.4,4.5,5.4c2.4-1.5-2-12-2-12l-2.9-14.3 c0,0,4.7,7.4,6.7,12.3c2,4.9,4.7,4.4,4.7,4.4s0,0,0.2-0.2c2.5-3.1-8.7-29.6-9.8-32c-1.1-2.4,4.5,0.7,6.7,2.9 c2.2,2.2,5.8,0.2,6.2-1.8C459.4,418.5,450.3,411.6,447.8,408.2L447.8,408.2z"
  },
  {
    id:"CO",
    n: "Corazón",
    d:"M296.4,223.6c0,0-1.1-0.7-0.9-1.7c0.2-0.9-0.7-2.9-1.1-3.7 c-0.4-0.6-4.4-10.8,4.6-15.2c0,0,1.5-0.7,1.8-0.7c0,0,4-5.7,4.4-8.6c0,0,0.2-1.3-0.2-1.8c0,0-0.6-4,2.2-4.2c0,0,2.4-0.6,2.9,2.4 c0,0-0.2,1.7,0.4,1.5c0,0,3.9-2.2,4.8-0.7c0,0,0-2.4,0.4-2.6l1.8-0.6c0,0,0.6,0.9,0.6,1.7c0,0,1.7-0.7,1.8-0.6l0.7-2.2 c0,0,1.7-0.6,2-0.2c0,0,0,2-0.2,2.4c0,0,0.9,0,1.1,0.2c0,0,1.8-2.4,2.2-2.4c0,0,1.5,0.4,1.7,0.7c0,0-0.7,2-1.1,2.4 c0,0,1.5,1.7-0.4,3.1c0,0,0.2,2-3.1,2.2c0,0-2.9,0.2-3.7,1.3c0,0,10.5,1.1,11.6,2.9c0,0,1.3,3.5-2.2,4.8H325c0,0,1.7,2,2.8,2.2 c0,0,3.9,0.7,3.9,2c0,0-0.2,2.4-3.9,0.6l3.5,2.6c0,0-0.6,1.8-2,1.3c0,0,0,4.8-1.7,4.4c0,0,3.7,6.2,0.9,13.9c0,0-2.2,6.6-7.7,11.4 c0,0-0.7,0.7-1.3,1.5c-0.6,0.7-1.1,1.5-2.2,1.7c-0.9,0.4-1.8,0.6-3.5-0.2c-1.8-0.7-5.1-2.9-6.1-3.3c-0.9-0.6-4.6-2.9-6.4-5.7 C299.7,233.8,296.2,227.8,296.4,223.6z"
  },
  {
    id:"PU",
    n: "Pulmones",
    d:"M335.5,275.8c-4.5-13.4-13.6-15.1-13.6-15.1 c-1.9-0.9-2.1-0.9-4.2,0.4c-2.3,1.3-1.5,5.1-1.5,6.4c0,0.4,0,1.1,0,2.1c-1.5-0.4-2.6-1.5-3.4-2.5c0-4.9,0.6-13.4,0.6-13.4h-3.2 c0,0,0.6,7.9,0.4,13.1c-0.8,0.9-1.9,1.7-3,2.3c0-0.8,0-1.1,0-1.5c0.2-1.1,0.8-5.1-1.5-6.4c-2.3-1.3-2.5-1.1-4.2-0.4 c0,0-9.1,1.7-13.6,15.1c-4.5,13.4-4,21.4,0.6,24c4.5,2.6,13.4,1.5,16.6-0.4c3.4-2.1,2.3-6.1,2.3-7.6c-0.2-1.5,0.4-5.5,0.6-6.6 c0.2-0.8,0.2-4.9,0-7.9c1.5-1.9,3.2-1.7,3.2-1.7c1.9,0,3.2,1.3,4,2.3c0,3,0,6.6,0.2,7.6c0.4,1.3,0.8,5.1,0.6,6.6 c-0.2,1.5-1.1,5.7,2.3,7.6c3.4,2.1,12.1,3,16.6,0.4C339.5,297.2,340,289,335.5,275.8L335.5,275.8z"
  },
  {
    id:"HI",
    n: "Higado",
    d:"M334.3,354c0.4-0.6,0.6-0.9,0.9-1.5 c1.7-3,3.4-6.1,2.8-7.8c-0.8-1.9-4.7-3-11.9-3h-0.2c-1.9,2.5-2.5,7.8-2.6,10.6c0.4,3.2,0,6.6-0.9,10.2 C324.6,361.7,330.8,360.2,334.3,354L334.3,354z"
  },
  {
    id:"HI",
    n: "Higado",
    d:"M319.3,341.9c-0.2,0-0.2,0-0.4,0c1.5,2.1,2.5,4.2,3.2,6.2 c0.4-2.5,1.1-4.5,1.9-6.4C322.7,341.7,321,341.9,319.3,341.9L319.3,341.9z"
  },
  {
    id:"HI",
    n: "Higado",
    d:"M319.8,365c1.2-3.7,1.6-7.1,1.4-10.6c0-0.2,0-0.4,0-0.4 s0,0,0-0.2c-0.6-3.9-2.2-7.5-4.9-11.2c-0.2,0-0.2,0-0.4,0c-1.8,0-3.9,0-5.7-0.2c-1.8,0-3.7-0.2-5.5-0.2c-5.5,0-11,0.8-13.4,6.1 c-3.7,7.5-2.9,15.3-2.2,22c0.2,1.4,0.2,2.9,0.4,4.3c0.4,4.9,1,8.1,2.6,8.1c1.4,0,3.5-1.8,6.3-5.1l0.2-0.2 C298.8,377.2,315.9,370.5,319.8,365L319.8,365z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M304.5,420.5c-0.8,0.8-1.7,1.3-2.5,1.7 c0.8,0.4,1.5,0.8,2.5,1.5c1.9-0.9,3.8-1.5,4.9-1.9c-0.2-0.8-0.4-1.5-0.6-1.9C307.3,420.1,305.8,420.5,304.5,420.5z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M303,439.8c-0.9,2.8-4,4.9-7.8,4.9l0,0 c-5.3,0-10-3.6-12.7-9.5c-4.5-10.4,0.8-20.1,1.5-21.4c0.4-0.4,1.3-1.1,3.8-0.6c0.4,0.2,0.9-0.2,0.9-0.8 c0.2-0.6-0.2-0.9-0.6-1.1c-1.3-0.4-2.3-0.4-3-0.2c2.5-5.5,7.6-7.9,12.1-7.9c4.2,0,7.6,2.1,8.5,5.3c0.8,3,0.6,5.7-0.6,7.9 c-1.5,2.6-4.4,3.8-5.1,4.2c-1.1-0.4-3.6-1.7-4.4-3.6c-0.2-0.4-0.8-0.6-1.1-0.4c-0.4,0.2-0.6,0.8-0.4,1.1 c0.9,2.5,3.4,3.8,4.9,4.4c-0.4,1.3,0,2.6,0.4,3.6c0,0-0.9,3.4-4.4,4.9c-0.4,0.2-0.6,0.8-0.4,1.1s0.4,0.6,0.8,0.6 c0.2,0,0.2,0,0.4,0c2.6-1.1,4-3.4,4.7-4.7C301.4,429.2,304.8,434.1,303,439.8z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M303,424.8c-0.9-0.6-1.7-1.1-2.5-1.3 c-0.2,1.3,0.6,2.6,0.8,2.8c0.2,0.2,0.9,1.1,1.5,2.3c1.7,1.9,2.8,4.5,3.4,6.4h2.6C308.1,429.4,306.2,426.9,303,424.8z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M295.6,432.6c-0.2,0-0.2,0-0.4,0c-0.4,0-0.6-0.2-0.8-0.6 c-0.2-0.4,0-0.9,0.4-1.1c3.2-1.5,4.2-4.7,4.4-4.9c-0.4-0.9-0.8-2.3-0.4-3.6c-1.3-0.6-4-1.9-4.9-4.4c-0.2-0.4,0-0.9,0.4-1.1 c0.4-0.2,0.9,0,1.1,0.4c0.8,1.9,3.2,3.2,4.4,3.6c0.8-0.2,3.6-1.3,5.1-4.2c1.1-2.1,1.3-4.7,0.6-7.9c-0.9-3.2-4.2-5.3-8.5-5.3 c-4.5,0-9.6,2.5-12.1,7.9c0.8-0.2,1.9-0.2,3,0.2c0.4,0.2,0.8,0.6,0.6,1.1c-0.2,0.6-0.6,0.8-0.9,0.8c-2.3-0.6-3.2,0-3.8,0.6 c-0.8,1.3-6.1,11-1.5,21.4c2.6,5.9,7.2,9.5,12.7,9.5l0,0c3.8,0,6.8-2.1,7.8-4.9c1.7-5.7-1.7-10.6-2.8-11.9 C299.5,429.2,298.2,431.4,295.6,432.6z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M320.9,422.2c-0.8-0.4-1.5-0.9-2.5-1.7 c-1.5-0.2-2.8-0.4-4.4-0.8c-0.2,0.6-0.4,1.1-0.6,1.9c1.1,0.4,3,0.9,4.9,1.9C319.2,422.9,320,422.4,320.9,422.2L320.9,422.2z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M321.5,426.3c0.2-0.2,0.9-1.3,0.8-2.8 c-2.8,1.1-7.2,2.1-8.3,11.5h2.6c0.6-1.9,1.5-4.5,3.2-6.2C320.7,427.5,321.3,426.5,321.5,426.3L321.5,426.3z"
  },
  {
    id:"RI",
    n: "Riñon",
    d:"M338.5,413.8c-0.4-0.4-1.3-1.1-3.8-0.6 c-0.4,0.2-0.9-0.2-0.9-0.8c-0.2-0.6,0.2-0.9,0.6-1.1c1.3-0.4,2.3-0.4,3-0.2c-2.5-5.5-7.6-7.9-12.1-7.9c-4.2,0-7.6,2.1-8.5,5.3 c-0.8,3-0.6,5.7,0.6,7.9c1.5,2.6,4.4,3.8,5.1,4.2c0.8-0.4,3.6-1.5,4.4-3.6c0.2-0.4,0.8-0.6,1.1-0.4c0.4,0.2,0.6,0.8,0.4,1.1 c-0.9,2.5-3.4,3.8-4.9,4.4c0.4,1.3,0,2.6-0.4,3.6l0,0c0,0,0.9,3.4,4.4,4.9c0.4,0.2,0.6,0.8,0.4,1.1c-0.2,0.4-0.4,0.6-0.8,0.6 c-0.2,0-0.2,0-0.4,0c-2.6-1.3-4-3.4-4.7-4.7c-1.1,1.3-4.5,6.2-2.8,11.7c0.9,2.8,4,4.7,7.8,4.7c5.3,0,10-3.4,12.7-9.3 C344.6,424.6,339.3,415.2,338.5,413.8L338.5,413.8z"
  }
  

  ];
  var comunas={};
    
  comunas.draw = function(id, data, toolTip){   
    function mouseOver(d){
      d3.select("#tooltip").transition().duration(100).style("opacity", .9);      
      
      d3.select("#tooltip").html(toolTip(d.n, data[d.id]))  
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 100) + "px");
    }
    
    function mouseOut(){
      d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
    }

    function onClick(){

    }

    function mouseIn(){

    }

    
    d3.select(id).selectAll(".state")
      .data(comunasPaths).enter().append("path").attr("class","state").attr("d",function(d){ return d.d;})
      .style("fill",function(d){ return data[d.id].color; })
      .on("mouseover", mouseOver).on("mouseout", mouseOut);
  }
  this.comunas=comunas;
})();
