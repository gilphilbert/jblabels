window.titleCreator={
  options: JSON.parse(sessionStorage.getItem('options'))||{
    allCaps:true,
    quotes:true
  },
  functions:{
    buildCanvases: function() {
      var b=[];
      for(i=0;i<20;i++) {
        var j=((i<10) ? i : i - 10);
        var x=((i<10) ? 40.5 : 264.5 );
        var y=(j*72)+40.5;
        b.push({
          canvas: [
              {
              type: 'line',
              x1: 0, y1: 36,
              x2: 224, y2: 36,
              lineWidth: 9,
              lineColor: 'red',
            },
              {
              type: 'rect',
              x: 32.5,
              y: 27,
              w: 160,
              h: 18,
              color: 'white',
              lineColor: 'red',
              lineWidth: 1.5
            },
              {
              type: 'polyline',
              lineWidth: 3,
              closePath: true,
              points: [{x: 32, y: 27}, {x: 32, y: 45}, {x: 40, y: 36}],
              color: 'red'
            },
              {
              type: 'polyline',
              lineWidth: 3,
              closePath: true,
              points: [{x: 193, y: 27}, {x: 193, y: 45}, {x: 184, y: 36}],
              color: 'red'
            }
          ],
          absolutePosition: {x: x, y: y}
        });
      }
      return b;
    },
    buildTable: function(titles,last){
      var b=[];
      for(i=0;i<10;i++){
        b.push([
          { text: ((titles.length>i) ? titles[i].aside : ''), font: ((titles.length>i && titles[i].aside.length>34) ? 'RetroCondensed' : 'Retro'), style:'title', margin:[0,5.5,0,0], border: [true, true, true, false]},
          { text: ((titles.length>i+10) ? titles[i+10].aside : ''), font: ((titles.length>i+10 && titles[i+10].aside.length>34) ? 'RetroCondensed' : 'Retro'), wordSpacing: -.9, style:'title', margin:[0,5.5,0,0], border: [true, true, true, false]}
        ]);
        b.push([
          { text: ((titles.length>i) ? titles[i].artist : ''), font: ((titles.length>i && titles[i].artist.length>27) ? 'RetroCondensed' : 'Retro'), style:'artist', margin:[0,2,0,0], border: [true, false, true, false]},
          { text: ((titles.length>i+10) ? titles[i+10].artist : ''), font: ((titles.length>i+10 && titles[i+10].arist.length>27) ? 'RetroCondensed' : 'Retro'), style:'artist', margin:[0,2,0,0], border: [true, false, true, false]}
        ]);
        b.push([
          { text: ((titles.length>i) ? titles[i].bside : ''), font: ((titles.length>i && titles[i].bside.length>34) ? 'RetroCondensed' : 'Retro'), style:'title', margin:[0,4.5,0,0], border: [true, false, true, true]},
          { text: ((titles.length>i+10) ? titles[i+10].bside : ''), font: ((titles.length>i+10 && titles[i+10].bside.length>34) ? 'RetroCondensed' : 'Retro'), style:'title', margin:[0,4.5,0,0], border: [true, false, true, true]}
        ]);
      }
      return {
        'alignment': 'center',
        table: {
          heights: [
            21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5
          ],
          widths: [215,215],
          body: b
        },
        layout: {
          hLineWidth: function (i, node) {return 1},
          vLineWidth: function (i, node) {return 1},
          hLineColor: 'red',
          vLineColor: 'red'
        },
        'pageBreak':((last===false) ? 'after' : '')
      }
    },
    buildPages: function(titles) {
      var p=[];
      var last=false;
      while(titles.length>0) {
        var page=titles.splice(0,20);
        if(titles.length==0) last=true;
        p.push(this.buildCanvases());
        p.push(this.buildTable(page,last));
      }
      return p;
    },
    getDocument: function(titles) {
      titles=this.formatTitles(titles);
      var c = {
        content: this.buildPages(titles),
        styles: {
          artist: {
            fontSize: 9,
            bold: true,
            font: 'Retro'
          },
          title: {
            fontSize: 10.5,
            bold: true,
            font: 'Retro'
          }
        }
      }
      return c;
    },
    formatTitles(titles) {
      titles.forEach(function(e){
        if(titleCreator.options.allCaps) {
          e.aside=e.aside.toUpperCase();
          e.bside=e.bside.toUpperCase();
          e.artist=e.artist.toUpperCase();
        }
        if(titleCreator.options.quotes) {
          e.aside='"'+e.aside+'"';
          e.bside='"'+e.bside+'"';
        }
      });
      return titles;
    }
  },
  start:function(titles) {
    var dd=this.functions.getDocument(titles);
    pdfMake.createPdf(dd).open();
  },
  getOptions:function(){
    return this.options;
  },
  setOption:function(option,value){
    this.options[option]=value;
    sessionStorage.setItem('options',JSON.stringify(this.getOptions()));
  },
  reset:function(){
    sessionStorage.removeItem('titles');
    sessionStorage.removeItem('options');
    this.options={
      allCaps:true,
      quotes:true
    };
  }
}

pdfMake.fonts = {
  Retro: {
    bold: 'RetroBold.ttf'
  },
  RetroCondensed: {
    bold: 'RetroBoldCondensed.ttf'
  }
}