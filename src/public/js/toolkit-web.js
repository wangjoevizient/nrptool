(function(){

  /// Charts

// ---------------------------
// LINE GRAPH
// ---------------------------

  $(function () {
    $('#line').highcharts({
      colors: ['#00cc99', '#9966ff', '#ff9933', '#3399ff', '#99cc33', '#ff6699', '#ffff33', '#00cc99'],
      title: {
        text: 'Line Chart',
        x: -20 //center
      },
      subtitle: {
        //text: 'Source: WorldClimate.com',
        x: -20
      },
      xAxis: {
        title: {
          text: 'X-Axis Label'
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Y-Axis Label'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#FF4E00'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Value 1',
        animation: false,
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'Value 2',
        animation: false,
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      }, {
        name: 'Value 3',
        animation: false,
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      }]
    });
  });

// ---------------------------
// BAR CHART (one color)
// ---------------------------

  $(function () {
    // Create the chart
    $('#column-one-clr').highcharts({
      colors: ['#9966ff'],
      chart: {
        type: 'column'
      },
      title: {
        text: 'Bar Chart'
      },
      subtitle: {
        //text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Y-Axis Label'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          animation: false,
          maxPointWidth: 10,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: 'Lable Title',
        colorByPoint: true,
        data: [{
          name: 'Value 1',
          y: 46.33,
          drilldown: 'Value 1'
        }, {
          name: 'Value 2',
          y: 34.03,
          drilldown: 'Value 2'
        }, {
          name: 'Value 3',
          y: 20.38,
          drilldown: 'Value 3'
        }, {
          name: 'Value 4',
          y: 8.77,
          drilldown: 'Value 4'
        }, {
          name: 'Value 5',
          y: 42.21,
          drilldown: 'Value 5'
        }, {
          name: 'Value 6',
          y: 18.78,
          drilldown: 'Value 6'
        }, {
          name: 'Value 7',
          y: 33.51,
          drilldown: 'Value 7'
        }, {
          name: 'Value 8',
          y: 15.16,
          drilldown: 'Value 8'
        }]
      }],
      drilldown: {
        series: [{
          animation: false,
          name: 'Value 1',
          id: 'Value 1',
          data: [
            [
              'v11.0',
              24.13
            ],
            [
              'v8.0',
              17.2
            ],
            [
              'v9.0',
              8.11
            ],
            [
              'v10.0',
              5.33
            ],
            [
              'v6.0',
              1.06
            ],
            [
              'v7.0',
              0.5
            ]
          ]
        }, {
          animation: false,
          name: 'Value 2',
          id: 'Value 2',
          data: [
            [
              'v40.0',
              5
            ],
            [
              'v41.0',
              4.32
            ],
            [
              'v42.0',
              3.68
            ],
            [
              'v39.0',
              2.96
            ],
            [
              'v36.0',
              2.53
            ],
            [
              'v43.0',
              1.45
            ],
            [
              'v31.0',
              1.24
            ],
            [
              'v35.0',
              0.85
            ],
            [
              'v38.0',
              0.6
            ],
            [
              'v32.0',
              0.55
            ],
            [
              'v37.0',
              0.38
            ],
            [
              'v33.0',
              0.19
            ],
            [
              'v34.0',
              0.14
            ],
            [
              'v30.0',
              0.14
            ]
          ]
        }, {
          animation: false,
          name: 'Value 3',
          id: 'Value 3',
          data: [
            [
              'v35',
              2.76
            ],
            [
              'v36',
              2.32
            ],
            [
              'v37',
              2.31
            ],
            [
              'v34',
              1.27
            ],
            [
              'v38',
              1.02
            ],
            [
              'v31',
              0.33
            ],
            [
              'v33',
              0.22
            ],
            [
              'v32',
              0.15
            ]
          ]
        }, {
          animation: false,
          name: 'Value 4',
          id: 'Value 4',
          data: [
            [
              'v8.0',
              2.56
            ],
            [
              'v7.1',
              0.77
            ],
            [
              'v5.1',
              0.42
            ],
            [
              'v5.0',
              0.3
            ],
            [
              'v6.1',
              0.29
            ],
            [
              'v7.0',
              0.26
            ],
            [
              'v6.2',
              0.17
            ]
          ]
        }, {
          animation: false,
          name: 'Value 5',
          id: 'Value 5',
          data: [
            [
              'v12.x',
              0.34
            ],
            [
              'v28',
              0.24
            ],
            [
              'v27',
              0.17
            ],
            [
              'v29',
              0.16
            ]
          ]
        },
          {
            animation: false,
            name: 'Value 6',
            id: 'Value 6',
            data: [
              [
                'v12.x',
                0.34
              ],
              [
                'v28',
                0.24
              ],
              [
                'v27',
                0.17
              ],
              [
                'v29',
                0.16
              ]
            ]
          },
          {
            animation: false,
            name: 'Value 7',
            id: 'Value 7',
            data: [
              [
                'v12.x',
                0.34
              ],
              [
                'v28',
                0.24
              ],
              [
                'v27',
                0.17
              ],
              [
                'v29',
                0.16
              ]
            ]
          },
          {
            animation: false,
            name: 'Value 8',
            id: 'Value 8',
            data: [
              [
                'v12.x',
                0.34
              ],
              [
                'v28',
                0.24
              ],
              [
                'v27',
                0.17
              ],
              [
                'v29',
                0.16
              ]
            ]
          }]
      }
    });
  });

  $(function () {
    $('#progress').highcharts({
      colors: ['#ff9933', '#9966ff','#00cc99'],
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Progress Chart'
      },
      xAxis: {
        categories: ['Overall', 'Three', 'Two', 'One']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'X-Axis % Label'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          animation: false,
          maxPointWidth: 10,
          stacking: 'normal'
        }
      },
      series: [{
        name: 'Not Started',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'In Progress',
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Completed',
        data: [3, 4, 4, 2, 5]
      }]
    });
  });

// ---------------------------
// Dot Plot Chart
// ---------------------------

  $(function () {
    $('#dot_plot').highcharts({
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Dot Plot Chart'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'X-Axis Label'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Y-Axis Label'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && 		Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
          }
        }
      },
      series: [{
        name: 'Value 1',
        animation: false,
        color: 'rgba(0, 204, 153, .5)',
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
          [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
          [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
          [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8]]

      }, {
        name: 'Value 2',
        animation: false,
        color: 'rgba(153, 102, 255, .5)',
        data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
          [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
          [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
          [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4]]
      }]
    });
  });


// ---------------------------
// Comparative Chart
// ---------------------------
  $(function () {
    $('#comparative').highcharts({
      colors: ['#00cc99', '#9966ff'],
      chart: {
        type: 'column'
      },
      title: {
        text: 'Comparative Chart'
      },
      subtitle: {
        //text: 'Source: WorldClimate.com'
      },
      xAxis: {
        title: {
          text: 'Y-Axis Label'
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Y-Axis Label'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
        }
      },
      series: [{
        animation: false,
        name: 'Value 1',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      }, {
        animation: false,
        name: 'Value 2',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]



      }]
    });
  });

// ---------------------------
// Benchmark Chart
// ---------------------------
  $(function () {

    $('#benchmark').highcharts({
      colors: ['#00cc99','#9966ff','#ff9933', '#696969'],
      title: {
        text: 'Benchmark Chart'
      },
      xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      },
      yAxis: {
        plotLines:[{
          value:5,
          color: '#000',
          width:2,
          zIndex:4,
        }]
      },
      plotOptions: {
        series: {
          animation: false,
          maxPointWidth: 10,
        }
      },
      chart: {
        events: {
          load: function () {
            $(".highcharts-legend-item path").attr('stroke-width', 2);
          },
          redraw: function () {
            $(".highcharts-legend-item path").attr('stroke-width', 2);
          }
        },
      },

      series: [{
        type: 'column',
        name: 'Marketing',
        data: [3, 2, 1, 3]
      }, {
        type: 'column',
        name: 'Research',
        data: [2, 3, 5, 7]
      }, {
        type: 'column',
        name: 'Support',
        data: [4, 3, 3, 9]
      },
        {
          name: 'Benchmark',
          type: 'line',
          color: '#000',
          lineWidth: 1,
          states:{
            hover:{
              lineWidth:0,
              lineWidthPlus: 0,
            }
          },
          data: [5, 5, 5, 5, 5],
          marker: {
            enabled: false,
          },
        }]
    });
  });

  ///  Calendar
  $('.js-calendar-dropdown').vizientCalendar('.js-calendar');
    
  //code for resize on devices  
  $('.docs-screen-selector .dropdown-menu a').click(function(e){
      $('.docs-component-container').removeClass().addClass("docs-component-container docs-component-" + $(this).data('class'));
      $('.docs-screen-selector.dropdown>a>span:first').text($(this).data('val'));
  });
  // encode html entities
  function htmlEncode(string){
    return $('<div/>').text(string).html();
  }

  // copy to clipboard
  function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
  
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
  
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
  
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
      console.log('Oops, unable to copy to clipboard');
    }
  
    document.body.removeChild(textArea);
  }
  
  /**
   * syntax hightlight
   */
  $(document).ready(function(){
    console.log('started');
    $('pre code').each(function(i, block){
      // var code = $(block).html();
      // var encodedCode = htmlEncode(code);
      // $(block).text(code);
      hljs.highlightBlock(block);
    })

    // activate tooltip
    $('[data-toggle="tooltip"').each(function(){
      $(this).vizTooltips();
    });
    
    /**
     * add code header
     */
    $('.docs-demo-container').each(function(){
      var $el = $(this);
      var $heading = $($el.find('.docs-demo-heading'));

      if ($heading.length == 0){
        $heading = $('<div class="docs-demo-heading">')
        $el.prepend($heading);
      }
    });

    /**
     * Generate show code
     */
    $('.docs-demo-container').each(function(){
      var $el = $(this);
      var $code = $($el.find('pre'));
      var $header = $el.find('.docs-demo-heading');
      var height = $code.outerHeight();
      var limit = 300;
      var showText = 'Show Code';
      var hideText = 'Hide Code';
      
      $el.data('height', height);
      
      if ( height > limit ){
        var $button = $('<button>')
          .attr('class', 'btn btn-sm btn-default margin-sm-right')
          .text('Show Code');

        $button.on('click', function(){
          $el.toggleClass('expanded');
          if ($el.hasClass('expanded')){
            $button.text(hideText);
            $code.animate({
              'max-height': height
            }, 500, function(){
              $code.attr('style', '');
            });
          } else {
            $button.text(showText);
            $code.css('max-height', height);
            $code.animate({
              'max-height': limit
            }, 500, function(){
              console.log('finish');
            });
          }
        });

        $header.append($button);

        $code.css({
          'max-height': limit + 'px',
        })
      }
    });

    /**
     * Generate copy buttons
     */
    $('.docs-demo-container').each(function(){
      var $el = $(this);
      var $code = $($el.find('pre code'));
      var $heading = $($el.find('.docs-demo-heading'));
      var id = $code.attr('id');

      if ($heading.length == 0){
        $heading = $('<div class="docs-demo-heading">')
        $el.prepend($heading);
      }

      var a = $('<a>')
        .attr('href', '#' + id)
        .attr('class', 'btn btn-default btn-sm docs-action-copy')
        .text('Copy');

      $heading.append(a);
    });

    /**
     * display tooltip for get artifact
     */
    $('.docs-action-artifact').each(function() {
      var $el = $(this);
      var $target = $($el.attr('href'));

      $el.tooltip({
        html: true,
        trigger: 'click',
        title: $target.html()
      });
    });

    /**
     * copy code
     */
    $('body').on('click', '.docs-action-copy', function(e){
      e.preventDefault();
      var $el = $(e.currentTarget);
      var $target = $($el.attr('href'));

      copyTextToClipboard($target.text());

      // add copy tootips
      if (!$el.hasClass('on')){
        $el.tooltip({
          title: 'Copied to clipboard!',
          trigger: 'manual',
          template: '<div class="tooltip tooltip-sm" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
      }

      $el.tooltip('show');
      setTimeout(function(){
        $el.tooltip('hide');
      }, 1000);
    });

    /** 
     * right nav generate
     */
    var sections = [];
    $('.docs-component').each(function(){
      var $el = $(this);
      sections.push({
        title: $el.children('h2').text(),
        id: $el.attr('id')
      });
    })

    $('.docs-right-nav').html(''); // clear the nav
    sections.forEach(function(item){
      var li = $('<li>');
      li.append('<a href="#'+item.id+'">'+ item.title +'</a>');
      $('.docs-right-nav').append(li);
    })

    /** demo delete row */
    // $('.table-container').each(function(){
    //   $container = $(this);
    //   $table = $container.find('table');
    // });
    $('body').on('click', '[data-toggle="delete-row"]',function(e){
      e.preventDefault();
      $el = $(e.currentTarget);
      $targetTable = $($el.attr('href'));

      if ($targetTable.length == 0){
        $targetTable = $($el.attr('data-target'));
      }

      if ($targetTable.length > 0){
        var $selectedRows = $targetTable
          .find('tbody .td-cb input:checked')
          .closest('tr');
        var undoText = '<tr><td colspan="5" class="td-alert td-alert-warning"> 3 items were deleted. <a class="link-undo" href="#">Undo?</a></td></tr>';
        console.log($selectedRows);

        $selectedRows.each(function(){
          var $row = $(this);
          var $undoRow = $(undoText);
          var $checkbox = $row.find('.td-cb input:checkbox');

          $undoRow.on('click', 'a.link-undo', function(e){
            e.preventDefault();
            $row.removeClass('is-deleted');
            $undoRow.remove();
          });

          // uncheck the checkbox
          $checkbox.prop('checked', false)
            .trigger('change');
          // add class to hide the row
          $row.addClass('is-deleted');
          // add the undo row
          $row.after($undoRow);
        });
        
      }
    });

  });
  
})();