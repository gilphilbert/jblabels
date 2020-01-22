window.titleCreator={
  styles: {
    arrows:{
      name:'Arrows',
      style:'arrows',
      maxwidth:265,
      margins:8,
      mergeArtist: true
    },
    diamond:{
      name:'Diamond',
      style:'diamond',
      maxwidth:265,
      margins:8,
      mergeArtist: true
    },
    multiple:{
      name:'Split Artist',
      style:'multiple',
      maxwidth:265,
      margins:8,
      mergeArtist: false
    },
    holly:{
      name:'Holly',
      style:'holly',
      artistTint:'#ffffff',
      titleTint:'#ffffff',
      primaryColor:'#ff0000',
      maxwidth:242,
      margins:22,
      mergeArtist: true
    },
    candycane:{
      name:'Candy Cane',
      style:'candycane',
      artistTint:'#ffffff',
      titleTint:'#ABDCA8',
      primaryColor:'#D3444A',
      maxwidth:242,
      margins:22,
      mergeArtist: true
    }
  },
  fonts:{
    Retro:{name:'Retro',titleSize:10,artistSize:9,margins:{aside:[1,7.5],artist:[2.5],bside:[.1,4]}},
    RetroCondensed:{name:'RetroCondensed',titleSize:10,artistSize:9,margins:{aside:[1,7.5],artist:[2.5],bside:[.1,4]}},
    ATypewriter:{name:'ATypewriter',titleSize:8.7,artistSize:8,margins:{aside:[0,7.5],artist:[2.5],bside:[0,4]}}
  },
  titles: {},
  functions:{
    buildCanvases: function(titles) {
      var b=[];
      for(i=0;i<titles.length;i++) {
        var style=titles[i].style;
        var j=((i<10) ? i : i - 10);
        var x=((i<10) ? 81.5 : 305.5 );
        var y=(j*72)+22.5;
        if(style.style=="holly") {
          b.push({
            svg: svgs.holly,
            width: 16,
            absolutePosition: {x: x+10, y: y+20}
          });
          b.push({
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 224,
                h: 72,
                lineColor: style.primaryColor,
                lineWidth: 1
              },
              {
                type: 'line',
                x1: 30, y1: 26,
                x2: 194, y2: 26,
                lineWidth: 1.5,
                lineColor: style.primaryColor
              },
              {
                type: 'line',
                x1: 30, y1: 46,
                x2: 194, y2: 46,
                lineWidth: 1.5,
                lineColor: style.primaryColor
              }
            ],
            absolutePosition: {x: x, y: y}
          });
          b.push({
            svg: svgs.holly,
            width: 16,
            absolutePosition: {x: x+200, y: y+20}
          })
        } else if(style.style=='candycane') {
          b.push({
            svg: svgs.candycane,
            width: 22,
            absolutePosition: {x: x+5, y: y+8}
          });
          b.push({
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 224,
                h: 72,
                lineColor: style.primaryColor,
                lineWidth: 1
              },
              {
                type: 'rect',
                x: 32.5,
                y: 27,
                w: 160,
                h: 18,
                color: style.artistTint,
                lineColor: style.primaryColor,
                lineWidth: 1.5
              },
              {
                type: 'polyline',
                lineWidth: 3,
                closePath: true,
                points: [{x: 32, y: 27}, {x: 32, y: 45}, {x: 40, y: 36}],
                color: style.primaryColor 
              },
              {
                type: 'polyline',
                lineWidth: 3,
                closePath: true,
                points: [{x: 193, y: 27}, {x: 193, y: 45}, {x: 184, y: 36}],
                color: style.primaryColor
              }
            ],
            absolutePosition: {x: x, y: y}
          });
          b.push({
            svg: svgs.candycane,
            width: 22,
            absolutePosition: {x: x+197, y: y+8}
          })
        } else if(style.style=="diamond") {
          b.push({
            canvas:[
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 224,
                h: 72,
                lineColor: style.primaryColor,
                lineWidth: 1
              },
              {
                type: 'line',
                x1: 0, y1: 36,
                x2: 224, y2: 36,
                lineWidth: 9,
                lineColor: style.primaryColor,
              },
              {
                type: 'polyline',
                lineWidth: 1.5,
                closePath: true,
                points: [{x: 35, y: 27},{x: 189, y: 27},{x: 198, y: 36},{x: 189, y: 45},{x: 35, y: 45},{x: 27, y: 36}],
                lineColor: style.primaryColor,
                color: style.artistTint
              }
            ],
            absolutePosition: {x: x, y: y}
          });
        } else if(style.style=="arrows") {
          b.push({
            canvas:[
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 224,
                h: 72,
                lineColor: style.primaryColor,
                lineWidth: 1
              },
              {
                type: 'line',
                x1: 0, y1: 36,
                x2: 224, y2: 36,
                lineWidth: 9,
                lineColor: style.primaryColor,
              },
              {
                type: 'rect',
                x: 32.5,
                y: 27,
                w: 160,
                h: 18,
                color: style.artistTint,
                lineColor: style.primaryColor,
                lineWidth: 1.5
              },
              {
                type: 'polyline',
                lineWidth: 3,
                closePath: true,
                points: [{x: 32, y: 27}, {x: 32, y: 45}, {x: 40, y: 36}],
                color: style.primaryColor 
              },
              {
                type: 'polyline',
                lineWidth: 3,
                closePath: true,
                points: [{x: 193, y: 27}, {x: 193, y: 45}, {x: 184, y: 36}],
                color: style.primaryColor
              }
            ],
            absolutePosition: {x: x, y: y}
          });
        } else if(style.style=="multiple") {
          b.push({
            canvas:[
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 224,
                h: 72,
                lineColor: style.primaryColor,
                lineWidth: 1
              },
              {
                type: 'line',
                x1: 30, y1: 36,
                x2: 194, y2: 36,
                lineWidth: 2,
                lineColor: style.primaryColor,
              }
            ],
            absolutePosition: {x: x, y: y}
          });
        }
      }
      return b;
    },
    buildTable: function(titles,last,columns,rows){
      var b=[];
      for(i=0;i<rows&&i<titles.length;i++){
        var t=titles[i];
        var x=[{
          text: ((titles.length>i) ? t.aside : ''),
          margin:[t.style.margins,((t)?t.style.font.margins.aside:0),t.style.margins,0],
          border: [false, false, false, false],
          fillColor:t.style.titleTint,
          font:t.style.font.name,
          fontSize:t.style.font.titleSize,
          bold:true
        }];
        if(t.style.mergeArtist===true) {
          var y=[{
            text: ((titles.length>i) ? t.artist+((t.artistb!='')?' / '+t.artistb:''):''),
            margin:[t.style.margins,((t)?t.style.font.margins.artist:0),t.style.margins,0],
            border: [false, false, false, false],
            fillColor:t.style.titleTint,
            font:t.style.font.name,
            fontSize:t.style.font.artistSize,
            bold:true
          }];
        } else {
          x[0].margin[3]=-10;
          var y=[{
            text: ((titles.length>i) ? t.artist+'\n\n'+((t.artistb==='')?t.artist:t.artistb) : ''),
            margin:[t.style.margins,((t)?-7:0),t.style.margins,-7],
            border: [false, false, false, false],
            fillColor:t.style.titleTint,
            font:t.style.font.name,
            fontSize:t.style.font.artistSize,
            bold:true
          }];
        }
        var z=[{
          text: ((titles.length>i) ? t.bside : ''),
          margin:[t.style.margins,((t)?t.style.font.margins.bside:0),t.style.margins,0],
          border: [false, false, false, false],
          fillColor:t.style.titleTint,
          font:t.style.font.name,
          fontSize:t.style.font.titleSize,
          bold:true
        }];
        if(columns==2) {
          t=((titles.length>i+rows)?titles[i+rows]:false);
          x.push({
            text: ((t) ? t.aside : ''),
            margin:((t)?[t.style.margins,t.style.font.margins.aside,t.style.margins,0]:[0,0,0,0]),
            border: [false, false, false, false],
            fillColor:((t)?t.style.titleTint:false),
            font:((t)?t.style.font.name:false),
            fontSize:((t)?t.style.font.titleSize:0),
            bold:true
          });
          y.push({
            text: ((t) ? t.artist+((t.artistb!='' && t.style.mergeArtist===true)?' / '+t.artistb:'') : ''),
            margin:((t)?[t.style.margins,t.style.font.margins.artist,t.style.margins,0]:[0,0,0,0]),
            border: [false, false, false, false],
            fillColor:((t)?t.style.titleTint:false),
            font:((t)?t.style.font.name:false),
            fontSize:((t)?t.style.font.artistSize:0),
            bold:true
	        });
          z.push({
            text: ((t) ? t.bside : ''),
            margin:((t)?[t.style.margins,t.style.font.margins.bside,t.style.margins,0]:[0,0,0,0]),
            border: [false, false, false, false],
            fillColor:((t)?t.style.titleTint:false),
            font:((t)?t.style.font.name:false),
            fontSize:((t)?t.style.font.titleSize:0),
            bold:true
	        });
        }

        b.push(x);
        b.push(y);
        b.push(z);
      };
      return {
        'alignment': 'center',
        table: {
          heights: [21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5,21.5,14,21.5],
          widths: ((columns==2) ? [215,215] : [215]),
          body: b
        },
        'pageBreak':((last===false) ? 'after' : '')
      }
    },
    buildPages: function(ts,columns=2,rows=10) {
      var p=[];
      var last=false;
      var tx=titleCreator.getTitles(true,((ts.length>0)?ts:[]));
      var titles=tx;
      while(titles.length>0) {
        var page=titles.splice(0,rows*columns);
        if(titles.length==0) last=true;
        if(titleCreator.getOptions('paperType')=='letter' || titleCreator.getOptions('paperType')=='a4')
          p.push(this.buildCanvases(page));
        p.push(this.buildTable(page,last,columns,rows));
      }
      return p;
    },
    getDocument: function(titles) {
      var c = {
        content: this.buildPages(titles),
        pageSize:'LETTER',
        pageMargins: [ 81, 22.5, 0, 0 ]
      }
      return c;
    },
    getA4Document: function(titles) {
      var c = {
        content: this.buildPages(titles),
        pageSize:'A4',
        pageMargins: [ 81, 22.5, 0, 0 ]
      }
      return c;
    }, 
    single12:function(titles){
      var columns=1,
          rows=12;
      var c = {
        content: this.buildPages(titles,columns,rows),
        pageSize:{width:225, height: 936},
        pageMargins: [ 0, 31.5, 0, 0 ],
        pageSize:'LEGAL',
        pageMargins: [ 193.5, 31.5, 0, 0 ]
      }
      return c; 
    },
    double10:function(titles){
      var columns=2,
          rows=5;
      var c = {
        content: this.buildPages(titles,columns,rows),
        pageSize:'LETTER',
        pageMargins: [ 81, 22.5, 0, 0 ]
      }
      return c; 
    },
    formatTitles: function(titles) {
      var textSizer=document.body.appendChild(crel('span'));//,{'style':'font-family:Arial;font-size:10.5pt;font-weight:bold','id':'text-sizer'}));
      var toArray=false;
      if(!Array.isArray(titles)) {
        titles=[titles];
        toArray=true;
      }
      titles.forEach(function(e){
        e.style=titleCreator.getStyle(((e.style)?e.style:false));

        var k=['primaryColor','font','allCaps','quotes','titleFillColor','artistFillColor'];
        k.forEach(function(key){
          if(e.hasOwnProperty(key)) {
            e.style[key]=e[key];
            if(key=='titleFillColor')
              if(e.titleFillColor)
                e.style.titleTint=shadeColor2(e.style.primaryColor,0.8);
              else
                e.style.titleTint='#ffffff';
            if(key=='artistFillColor')
              if(e.artistFillColor)
                e.style.artistTint=shadeColor2(e.style.primaryColor,0.8);
              else
                e.style.artistTint='#ffffff';
          }
          delete(e[key]);
        });
        e.style.font=titleCreator.getFont(((e.font)?e.font:titleCreator.getOptions('font')));

        var awrap=false,bwrap=false;
        if(e.allCaps || (e.allCaps==null && e.style.allCaps)) {
          e.aside=e.aside.toUpperCase();
          e.bside=e.bside.toUpperCase();
          e.artist=e.artist.toUpperCase();
          e.artistb=e.artistb.toUpperCase();
        }
        textSizer.style.fontFamily=e.style.font.name;

        var sq=((e.quotes || (e.quotes==null && e.style.quotes))?true:false);

        //if there's no "/" and there are parethases that are not at the start and end of the entire string
        if(e.aside.indexOf('/')==-1 && (e.aside.indexOf('(')>=0 || e.aside.indexOf(')')>=0) && !(e.aside.indexOf('(')==0 && e.aside.indexOf(')')==e.aside.length-1)) {
          //split based on the parenthases
          var x;
          if(e.aside.indexOf(')')==e.aside.length-1) {
            x=trimArray(e.aside.split("("));
            if(sq)
              x[0]='"'+x[0]+'"';
            x=x.join("\n(");
	        } else {
            x=trimArray(e.aside.split(")"));
            if(sq)
              x[1]='"'+x[1]+'"';
            x=x.join(")\n");
          }
          textSizer.innerHTML=x.replace('\n','<br>');
          w=textSizer.offsetWidth;
          if(w<=e.style.maxwidth) //if the name is too long (with the break around parenthases) then ignore the break (best chance of getting it in two lines)
            e.aside=x;
          awrap=true;
        } else {
          //if there's a "/""
          if(e.aside.indexOf('/')>=1) {
            //e.aside=e.aside.replace('/',"\n");
            var x=trimArray(e.aside.split('/'));
            if(sq)
              for(i=0;i<x.length;i++) x[i]='"'+x[i]+'"';
	          e.aside=x.join("\n");
	          awrap=true;
          } else {
            //just a single line of text
            
            textSizer.innerHTML=e.aside;
            w=textSizer.offsetWidth;
            if(w>e.style.maxwidth) awrap=true;
            if(sq) e.aside='"'+e.aside+'"';
          }
	      }

        if(e.bside.indexOf('/')==-1 && (e.bside.indexOf('(')>=0 || e.bside.indexOf(')')>=0) && !(e.bside.indexOf('(')==0 && e.bside.indexOf(')')==e.bside.length-1)) {
          var x;
          if(e.bside.indexOf(')')==e.bside.length-1) {
            x=trimArray(e.bside.split("("));
            if(sq)
              x[0]='"'+x[0]+'"';
            x=x.join("\n(");
	        } else {
            x=trimArray(e.bside.split(")"));
            if(sq)
              x[1]='"'+x[1]+'"';
            x=x.join(")\n");
          }
          textSizer.innerHTML=x.replace('\n','<br>');
          w=textSizer.offsetWidth;
          if(w<=e.style.maxwidth) //if the name is too long (with the break around parenthases) then ignore the break (best chance of getting it in two lines)
            e.bside=x;
          bwrap=true;
        } else {
          if(e.bside.indexOf('/')>=1) {
            var x=trimArray(e.bside.split('/'));
            if(sq)
              for(i=0;i<x.length;i++) x[i]='"'+x[i]+'"';
	          e.bside=x.join("\n");
	          bwrap=true;
          } else {
            textSizer.innerText=e.bside;
            w=textSizer.offsetWidth;
            if(w>e.style.maxwidth) bwrap=true;
            if(sq) e.bside='"'+e.bside+'"';
          }
	      }
        e.style.font.margins={
	        aside:e.style.font.margins.aside[((awrap)?0:1)],
	        artist:e.style.font.margins.artist[0],
	        bside:e.style.font.margins.bside[((bwrap)?0:1)]
        }
      });
      textSizer.parentNode.removeChild(textSizer);

      if(toArray) titles=titles[0];
      return titles;
    }
  },
  start:function(titles) {
    var dd={};
    switch(this.getOptions('paperType')) {
      case 'single12':
        dd=this.functions.single12(titles);
        break;
      case 'double10':
        dd=this.functions.double10(titles);
        break;
      case 'a4':
        dd=this.functions.getA4Document(titles);
        break;
      default:
        dd=this.functions.getDocument(titles);
        break;
    }
    pdfMake.createPdf(dd).open();
  },
  getOptions:function(x=false){
    var o=titleCreator.db.getCollection('options').findOne();
    o=stripMD(o);
    if(x && o.hasOwnProperty(x))
      return o[x];
    return o;
  },
  getFont:function(f){
    return JSON.parse(JSON.stringify(titleCreator.fonts[f]))
  },
  getStyle:function(t){
    var o=titleCreator.db.getCollection('options').findOne();
    var s=JSON.parse(JSON.stringify(this.styles[((t)?t:o.style)]));
    if(o.paperType != 'letter' && o.paperType != 'a4') {
      s.artistTint='#ffffff';
      s.titleTint='#ffffff';
      s.primaryColor='#ffffff';
    } else {
      if(!s.hasOwnProperty('artistTint'))
        s.artistTint=((o.artistFillColor) ? shadeColor2(o.primaryColor,0.8) : '#ffffff');
      if(!s.hasOwnProperty('titleTint'))
        s.titleTint=((o.titleFillColor) ? shadeColor2(o.primaryColor,0.8) : '#ffffff');
      if(!s.hasOwnProperty('primaryColor'))
        s.primaryColor=o.primaryColor;
    }
    var k=Object.keys(o);
    k.forEach(function(key){
      if(key!='paperType' && key!='style')
        if(!s.hasOwnProperty(key)) s[key]=o[key];
    });
    s.font=this.fonts[s.font];
    return s;
  },
  setOption:function(option,value){
    var o=titleCreator.db.getCollection('options');
    var oo=o.findOne();
    if(oo.hasOwnProperty(option))
      oo[option]=value;
    o.update(oo);
    titleCreator.db.saveDatabase();
  },
  reset:function(){
    var titles=titleCreator.db.getCollection('titles');
    titles.clear();
    titleCreator.db.saveDatabase();
    window.location.reload();
  },
  getTitles:function(formatted=false,list=[]){
    var col=titleCreator.db.getCollection('titles');
    var t=false;
    if(list.length==0)
      t=col.find();
    else
      t=col.find({'id':{$in:list}});
    if(formatted)
      return this.functions.formatTitles(t);
    return t;
  },
  getTitle:function(id=false,formatted=false){
    var found=null;
    if(id===false) {
      found={
        id:0,
        artist: 'Artist',
        aside: 'Side A',
        bside: 'Side B',
        artistb: ''
      }
    } else {
      found=titleCreator.db.getCollection('titles').findOne({'id':parseInt(id)});
      found=stripMD(found);
    }

    if(formatted===true && found!==null)
      return this.functions.formatTitles(found);
    return found;
  },
  addTitles:function(i){
    var titles=titleCreator.db.getCollection('titles');
    var o=[];
    i.forEach(function(v){
      o.push(titles.insert(v));
    });
    titleCreator.db.saveDatabase();
    return o;
  },
  removeTitle:function(id){
    id=parseInt(id);
    var titles=titleCreator.db.getCollection('titles');
    var r=titles.findOne({'id':id});
    titles.remove(r);
    titleCreator.db.saveDatabase();
  },
  updateTitle:function(inItem){
    var titles=titleCreator.db.getCollection('titles');
    var dbItem=titles.findOne({'id':parseInt(inItem.id)});
    var k=Object.keys(inItem);
    k.forEach(function(key){
      if(key!=='id')
        dbItem[key]=inItem[key]
    });
    var k=Object.keys(dbItem);
    k.forEach(function(key){
       if(key!='$loki' && key!='meta') {
        if(!inItem.hasOwnProperty(key)) {
          delete(dbItem[key]);
        }
      }
    });
    titles.update(dbItem);
    titleCreator.db.saveDatabase();
  },
  exportDB:function(csv=false) {
    var data='',
        ext='';
    if(csv) {
      //export CSV
      data="data:text/csv;charset=utf-8,";
      var titles=this.getTitles();
      titles.forEach(function(t){
        data+=t.aside+','+t.bside+','+t.artist+','+t.artistb+"\r\n";
      });
      ext='csv';
    } else {
      //export JSON
      data="data:text/json;charset=utf-8,";
      data+=encodeURIComponent(this.db.serialize());
      ext='json';
    }

    var a=document.createElement('a');
    a.setAttribute('href', data);
    a.setAttribute('download','jukestudio.'+ext);
    document.body.appendChild(a);
    a.click();
    a.remove();
  },
  importDB:function(data,type) {
    var out=[];
    if(type=='csv') {
      var lines=data.split('\r\n');
      var inTitles=[];
      lines.reverse;
      lines.forEach(function(line){
        var fields=line.split(',');
        if(fields.length>=3) {
          inTitles.push({aside:fields[0],bside:fields[1],artist:fields[2],artistb:((fields.length==4)?fields[3]:'')});
        }
      });
      if(inTitles!=[])
        out=this.addTitles(inTitles);

    } else {
      var ob=JSON.parse(data);
      if(ob.filename=='jukestudio.db') {
        titleCreator.db.loadJSONObject(ob);
        titleCreator.db.saveDatabase();
        out=titleCreator.db.getCollection("titles").data;
      }
    }
    return out;
  },
  loadDB:function(){
    titleCreator.db=new loki("jukestudio.db",{
      autoload: true,
      autoloadCallback : databaseInitialize
    });
  }
}

function databaseInitialize() {
  //if creating, trigger the import action
  var titles=titleCreator.db.getCollection("titles");
  if (titles===null) {
    titles=titleCreator.db.addCollection("titles",{'clone':true});
    options=titleCreator.db.addCollection("options",{'clone':true});
    importLocalStorage(titles,options);
  }
  titles.addListener('insert',function(input){ input.id=input.$loki; titleCreator.db.getCollection('titles').update(input); });

  pdfMake.fonts = {
    Retro: {
      bold: 'Retro.ttf'
    },
    RetroCondensed: {
      bold: 'RetroCondensed.ttf'
    },
    ATypewriter: {
      bold: 'ATypewriter.ttf'
    }
  }

  startApp();
}


function importLocalStorage(titles,options) {
  //import the old titles
  var oldTitles=localStorage.getItem('titles');
  if(oldTitles!==null) {
    JSON.parse(oldTitles).forEach(function(e){
       titles.insert(e);
    });
    localStorage.removeItem('titles')
  }

  //import the old options
  var oldOptions=localStorage.getItem('options');
  if(oldOptions!==null) {
    oldOptions=JSON.parse(oldOptions)
    options.insert(oldOptions);
  } else {
    options.insert({
      allCaps:true,
      quotes:true,
      primaryColor:'#ff0000',
      artistFillColor:false,
      titleFillColor:false,
      font:'Retro',
      style:'arrows',
      paperType:'letter'
    });
  }
  localStorage.removeItem('options')
  titleCreator.db.saveDatabase();
}

var svgs = {
  holly_whole: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 225 72" width="225" height="72"><defs><clipPath id="_clipPath_cPpnFdZNwS8pWcV4up5VaUpmizUsHGU8"><rect width="225" height="72"/></clipPath></defs><g clip-path="url(#_clipPath_cPpnFdZNwS8pWcV4up5VaUpmizUsHGU8)"><mask id="_mask_zomV0SVTZmvZ26YbAEZERiVzoV8zJ0lB"><rect x="0" y="0" width="225" height="72" fill="white" stroke="none"/></mask><rect x="0" y="0" width="225" height="72" transform="matrix(1,0,0,1,0,0)" fill="none" mask="url(#_mask_zomV0SVTZmvZ26YbAEZERiVzoV8zJ0lB)" vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(254,71,29)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g><g><path d=" M 15.236 35.097 C 15.565 32.93 14.426 31.703 11.769 31.37 C 13.256 29.773 13.087 28.066 11.215 26.201 C 13.026 25.508 14.149 23.452 14.538 19.986 C 16.079 21.244 17.387 20.829 18.415 18.693 C 19.953 19.514 22.123 19.202 24.876 17.709 C 22.406 20.04 22.688 22.045 25.676 23.678 C 22.476 26.508 22.164 28.288 24.691 28.97 C 22.408 30.483 21.686 32.407 22.476 34.692 C 20.828 33.859 19.121 34.367 17.307 36.169 C 16.612 33.138 17.571 28.847 20.138 23.247 C 17.951 24.049 16.333 28.015 15.236 35.097 Z " fill="rgb(74,149,79)"/><path d=" M 9 40.6 C 8.977 39.43 8.225 37.154 8.262 36.169 C 7.886 34.331 8.196 32.842 8.258 30.587 C 8.26 30.509 8.288 30.504 8.32 30.574 C 10.348 34.99 12.005 36.565 13.8 35.492 C 16.077 40.158 17.898 41.507 19.215 39.492 C 19.424 42.634 21.204 44.127 24.507 43.923 C 22.708 45.731 23.093 48.598 25.614 52.476 C 22.96 52.468 20.962 53.156 19.522 54.445 C 18.266 51.819 16.518 51.035 14.23 52.045 C 13.865 48.927 12.261 47.548 9.369 47.861 C 10.154 45.439 9.678 43.281 7.892 41.338 C 8.356 41.599 9.019 41.592 9 40.6 Z  M 10.477 37.892 C 13.381 44.425 17.151 48.317 21.738 49.522 C 17.533 46.596 13.811 42.751 10.477 37.892 Z " fill-rule="evenodd" fill="rgb(74,149,79)"/><path d=" M 7.921 19.962 C 7.921 18.633 8.999 17.555 10.327 17.555 C 11.656 17.555 12.734 18.633 12.734 19.962 C 12.734 21.29 11.656 22.368 10.327 22.368 C 8.999 22.368 7.921 21.29 7.921 19.962 Z  M 10.253 19.508 C 10.253 19.245 10.466 19.031 10.729 19.031 C 10.992 19.031 11.206 19.245 11.206 19.508 C 11.206 19.771 10.992 19.984 10.729 19.984 C 10.466 19.984 10.253 19.771 10.253 19.508 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 21.247 36.783 C 20.885 35.604 22.102 34.453 23.334 34.453 C 24.567 34.453 25.568 35.454 25.568 36.687 C 25.568 37.92 24.55 39.125 23.334 38.921 C 22.422 38.768 21.583 37.878 21.247 36.783 Z  M 23.305 36.327 C 23.305 36.092 23.496 35.901 23.731 35.901 C 23.966 35.901 24.157 36.092 24.157 36.327 C 24.157 36.562 23.966 36.753 23.731 36.753 C 23.496 36.753 23.305 36.562 23.305 36.327 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 7.399 52.049 C 6.919 50.922 7.444 49.618 8.57 49.139 C 9.696 48.659 11 49.184 11.48 50.31 C 11.605 50.605 11.662 50.911 11.657 51.212 C 9.44 50.72 9.451 50.937 11.566 51.807 C 11.385 52.42 10.942 52.95 10.308 53.22 C 9.182 53.7 7.878 53.175 7.399 52.049 Z " fill="rgb(254,71,29)"/></g><g><path d=" M 207.339 35.097 C 207.669 32.93 206.529 31.703 203.872 31.37 C 205.359 29.773 205.19 28.066 203.319 26.201 C 205.129 25.508 206.253 23.452 206.641 19.986 C 208.182 21.244 209.49 20.829 210.518 18.693 C 212.057 19.514 214.226 19.202 216.979 17.709 C 214.509 20.04 214.792 22.045 217.779 23.678 C 214.579 26.508 214.267 28.288 216.795 28.97 C 214.512 30.483 213.789 32.407 214.579 34.692 C 212.931 33.859 211.224 34.367 209.411 36.169 C 208.715 33.138 209.675 28.847 212.241 23.247 C 210.054 24.049 208.436 28.015 207.339 35.097 Z " fill="rgb(74,149,79)"/><path d=" M 201.103 40.6 C 201.081 39.43 200.328 37.154 200.365 36.169 C 199.989 34.331 200.299 32.842 200.361 30.587 C 200.363 30.509 200.391 30.504 200.424 30.574 C 202.451 34.99 204.108 36.565 205.903 35.492 C 208.181 40.158 210.001 41.507 211.318 39.492 C 211.528 42.634 213.307 44.127 216.61 43.923 C 214.811 45.731 215.196 48.598 217.718 52.476 C 215.064 52.468 213.065 53.156 211.626 54.445 C 210.369 51.819 208.621 51.035 206.334 52.045 C 205.969 48.927 204.364 47.548 201.473 47.861 C 202.257 45.439 201.781 43.281 199.996 41.338 C 200.459 41.599 201.123 41.592 201.103 40.6 Z  M 202.58 37.892 C 205.485 44.425 209.254 48.317 213.841 49.522 C 209.636 46.596 205.914 42.751 202.58 37.892 Z " fill-rule="evenodd" fill="rgb(74,149,79)"/><path d=" M 200.024 19.962 C 200.024 18.633 201.102 17.555 202.431 17.555 C 203.759 17.555 204.837 18.633 204.837 19.962 C 204.837 21.29 203.759 22.368 202.431 22.368 C 201.102 22.368 200.024 21.29 200.024 19.962 Z  M 202.356 19.508 C 202.356 19.245 202.569 19.031 202.832 19.031 C 203.095 19.031 203.309 19.245 203.309 19.508 C 203.309 19.771 203.095 19.984 202.832 19.984 C 202.569 19.984 202.356 19.771 202.356 19.508 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 213.35 36.783 C 212.988 35.604 214.205 34.453 215.438 34.453 C 216.671 34.453 217.672 35.454 217.672 36.687 C 217.672 37.92 216.654 39.125 215.438 38.921 C 214.525 38.768 213.686 37.878 213.35 36.783 Z  M 215.409 36.327 C 215.409 36.092 215.6 35.901 215.835 35.901 C 216.07 35.901 216.26 36.092 216.26 36.327 C 216.26 36.562 216.07 36.753 215.835 36.753 C 215.6 36.753 215.409 36.562 215.409 36.327 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 199.502 52.049 C 199.022 50.922 199.547 49.618 200.673 49.139 C 201.8 48.659 203.104 49.184 203.583 50.31 C 203.709 50.605 203.765 50.911 203.761 51.212 C 201.543 50.72 201.554 50.937 203.669 51.807 C 203.488 52.42 203.045 52.95 202.412 53.22 C 201.285 53.7 199.982 53.175 199.502 52.049 Z " fill="rgb(254,71,29)"/></g></g><g><path d=" M 194.5 26.75 L 195 26.75 L 195 27.75 L 194.5 27.75 L 30.5 27.75 L 30 27.75 L 30 26.75 L 30.5 26.75 L 194.5 26.75 Z " fill="rgb(254,71,29)"/><path d=" M 194.5 44.25 L 195 44.25 L 195 45.25 L 194.5 45.25 L 30.5 45.25 L 30 45.25 L 30 44.25 L 30.5 44.25 L 194.5 44.25 Z " fill="rgb(254,71,29)"/></g></g></svg>',
  candycane: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 22.401 58" width="22.401pt" height="58pt"><defs><clipPath id="_clipPath_jskWlPVFTKaFA8IlCRvbicihXxujuqbj"><rect width="22.401" height="58"/></clipPath></defs><g clip-path="url(#_clipPath_jskWlPVFTKaFA8IlCRvbicihXxujuqbj)"><path d=" M 13.143 2.54 L 12.738 2.135 L 12.701 0.552 L 12.038 1.215 L 11.155 0.331 L 10.602 1.105 L 9.498 0.331 L 9.387 2.467 L 8.099 1.473 L 7.841 2.872 L 6.295 1.583 L 6.295 0.552 L 4.859 1.105 L 4.528 0 L 3.681 0.884 L 2.687 0.258 L 2.65 1.767 L 1.913 2.135 L 3.423 3.424 L 2.576 3.976 L 4.307 5.964 L 4.454 5.633 L 4.859 6.995 L 6.295 7.179 L 5.632 8.063 L 7.436 8.173 C 8.249 5.967 10.161 4.1 13.143 2.54 Z " fill="rgb(90,177,98)"/><path d=" M 2.842 15.632 C 2.121 13.627 1.512 13.074 2.842 12.932 C 5.91 12.602 7.676 15.124 10.494 15.632 C 13.623 16.197 20.694 13.074 19.496 15.632 C 19.253 16.151 18.835 16.462 18.596 16.982 C 18.189 17.867 18.702 18.875 18.146 19.683 C 16.38 22.247 13.206 16.664 10.494 17.433 C 8.76 17.924 2.006 22.823 1.942 18.333 C 1.928 17.314 3.302 16.911 2.842 15.632 Z " fill="rgb(90,177,98)"/><path d=" M 1.021 33.492 C 1.021 31.423 2.7 29.743 4.769 29.743 C 6.838 29.743 8.518 31.423 8.518 33.492 C 8.518 35.561 6.838 37.241 4.769 37.241 C 2.7 37.241 1.021 35.561 1.021 33.492 Z  M 3.856 33.358 C 2.163 32.564 2.275 31.668 3.452 30.738 C 3.331 31.6 3.354 32.452 3.856 33.358 L 3.856 33.358 L 3.856 33.358 L 3.856 33.358 L 3.856 33.358 Z  M 4.86 32.8 C 4.701 30.937 5.533 30.587 6.927 31.141 C 6.119 31.468 5.393 31.913 4.86 32.8 L 4.86 32.8 L 4.86 32.8 L 4.86 32.8 L 4.86 32.8 Z  M 5.584 33.247 C 7.342 32.611 7.896 33.324 7.722 34.814 C 7.197 34.118 6.58 33.532 5.584 33.247 L 5.584 33.247 L 5.584 33.247 L 5.584 33.247 Z  M 5.341 34.344 C 6.409 35.878 5.865 36.597 4.38 36.815 C 4.916 36.128 5.322 35.38 5.341 34.344 L 5.341 34.344 L 5.341 34.344 Z  M 4.217 34.393 C 3.013 35.822 2.176 35.482 1.582 34.104 C 2.384 34.445 3.212 34.643 4.217 34.393 L 4.217 34.393 Z " fill-rule="evenodd" fill="rgb(211,68,74)"/><path d=" M 10.758 44.933 L 12.103 45.942 L 12.775 45.521 L 13.112 46.53 L 13.728 46.558 L 12.944 47.623 L 13.364 47.904 L 13.448 48.632 L 14.99 49.081 L 13.953 50.174 L 14.457 50.734 L 13.112 51.099 L 13.028 50.65 L 11.01 50.65 L 12.019 51.912 L 10.786 53.453 L 10.926 54.939 L 11.879 55.359 L 9.412 56.368 L 9.244 57.573 L 7.142 55.976 L 8.067 54.518 L 7.17 52.584 L 6.077 53.425 L 6.133 54.042 L 4.788 54.77 L 4.535 54.35 L 2.013 55.976 L 2.545 53.958 L 1.957 52.584 L 4.283 50.594 L 1.677 50.23 L 2.349 48.801 L 1.621 47.035 L 2.882 46.446 L 3.386 45.465 L 2.966 44.344 L 4.283 44.68 L 4.872 44.204 L 4.956 44.877 L 6.245 44.008 L 10.758 44.933 Z " fill="rgb(90,177,98)"/><circle vector-effect="non-scaling-stroke" cx="12.564724385874356" cy="54.07416847227532" r="1.1546563316837428" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="8.161460666165567" cy="42.73796029434936" r="1.5525014357532108" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="9.988748352827443" cy="43.920322915130605" r="1.5525014357532108" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="7.624023111264968" cy="45.371404313362085" r="1.5525014357532108" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="4.943992596761596" cy="56.383481135642825" r="1.154656331683742" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="3.09642564380362" cy="22.205653717804026" r="1.154656331683742" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="2.865552788598869" cy="25.207818591313817" r="0.9237834764790276" fill="rgb(211,68,74)"/><circle vector-effect="non-scaling-stroke" cx="12.79559724107898" cy="57.07621652352101" r="0.9237834764790271" fill="rgb(211,68,74)"/><path d=" M 18.569 32.598 L 19.955 29.826 L 22.264 30.288 C 22.259 28.349 20.724 25.274 17.645 21.051 L 12.565 19.204 C 15.684 23.929 17.7 28.408 18.569 32.598 Z " fill="rgb(90,177,98)"/><path d=" M 4.251 39.064 C 13.164 37.304 11.892 32.048 6.099 29.365 C 3.339 28.086 4.287 23.897 6.561 20.589 L 10.255 18.28 C 7.734 22.148 6.983 25.228 7.997 27.517 C 8.489 28.627 10.009 28.648 10.717 29.826 C 14.1 35.454 11.559 40.671 3.789 43.682 L 5.175 40.449 L 4.251 39.064 Z " fill="rgb(90,177,98)"/><path d=" M 18.149 11.057 L 18.208 11.371 C 19.973 10.922 20.556 11.318 21.319 11.472 L 21.638 11.202 C 21.248 11.036 19.685 10.47 18.149 11.057 L 18.149 11.057 L 18.149 11.057 L 18.149 11.057 Z  M 17.693 10.044 L 17.863 10.455 C 19.27 9.164 20.929 9.856 21.897 9.899 L 21.816 9.726 C 21.174 9.37 18.707 8.633 17.693 10.044 L 17.693 10.044 L 17.693 10.044 Z  M 10.415 10.624 L 10.628 10.218 C 9.473 9.027 8.841 7.892 8.675 6.758 L 8.125 7.522 C 8.636 8.965 9.404 10.004 10.415 10.624 L 10.415 10.624 L 10.415 10.624 L 10.415 10.624 L 10.415 10.624 L 10.415 10.624 L 10.415 10.624 Z  M 10.85 9.542 L 11.121 9.088 C 10.004 7.777 10.221 5.965 10.013 4.945 L 9.275 5.655 C 9.246 6.409 9.972 9.138 10.85 9.542 L 10.85 9.542 L 10.85 9.542 L 10.85 9.542 L 10.85 9.542 L 10.85 9.542 L 10.85 9.542 Z  M 12.532 7.657 L 13.034 7.406 C 12.54 5.6 13.64 4.223 14.097 3.347 L 13.204 3.377 C 12.694 3.979 11.739 6.649 12.532 7.657 L 12.532 7.657 L 12.532 7.657 L 12.532 7.657 L 12.532 7.657 L 12.532 7.657 Z  M 13.749 7.348 L 14.3 7.367 C 14.211 5.497 15.527 4.397 16.165 3.642 L 15.31 3.426 C 14.681 3.901 13.324 6.179 13.749 7.348 L 13.749 7.348 L 13.749 7.348 L 13.749 7.348 L 13.749 7.348 Z  M 15.605 7.454 L 15.924 7.58 C 16.809 5.888 18.604 5.974 19.529 5.686 L 19.239 5.367 C 18.514 5.251 15.929 5.731 15.605 7.454 L 15.605 7.454 L 15.605 7.454 L 15.605 7.454 Z  M 16.388 8.005 L 16.687 8.334 C 17.572 6.641 19.367 6.728 20.292 6.439 L 20.157 6.304 C 19.432 6.188 16.861 6.333 16.388 8.005 L 16.388 8.005 L 16.388 8.005 Z  M 17.645 35.831 L 11.641 13.661 C 9.825 6.779 16.918 5.982 17.645 12.276 C 18.592 15.547 23.255 12.997 22.264 9.504 C 18.791 -1.829 4.205 1.28 7.484 14.123 L 13.488 37.678 C 14.547 41.362 18.971 39.808 17.645 35.831 L 17.645 35.831 L 17.645 35.831 L 17.645 35.831 Z  M 7.71 11.488 L 10.938 13.021 L 11.006 13.605 L 7.768 12.163 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 L 7.71 11.488 Z  M 7.916 13.422 L 11.144 14.955 L 11.212 15.539 L 7.974 14.097 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 L 7.916 13.422 Z  M 9.152 17.084 L 12.38 18.617 L 12.448 19.201 L 9.21 17.759 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 L 9.152 17.084 Z  M 9.667 19.201 L 12.895 20.734 L 12.963 21.318 L 9.725 19.876 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 L 9.667 19.201 Z  M 10.611 23.205 C 11.132 23.051 12.35 23.541 13.977 24.713 L 14.094 25.242 C 12.789 24.422 11.61 23.996 10.747 23.846 L 10.611 23.205 L 10.611 23.205 L 10.611 23.205 L 10.611 23.205 L 10.611 23.205 L 10.611 23.205 L 10.611 23.205 Z  M 11.129 25.19 C 11.761 25.085 12.984 25.58 14.495 26.698 L 14.612 27.19 C 13.579 26.321 12.41 25.942 11.265 25.831 L 11.129 25.19 L 11.129 25.19 L 11.129 25.19 L 11.129 25.19 L 11.129 25.19 L 11.129 25.19 Z  M 12.276 29.492 C 12.907 29.388 14.13 29.883 15.641 31 L 15.758 31.53 C 14.726 30.66 13.538 30.334 12.393 30.223 L 12.276 29.492 L 12.276 29.492 L 12.276 29.492 L 12.276 29.492 L 12.276 29.492 Z  M 12.763 31.258 C 13.394 31.154 14.691 31.694 16.202 32.812 L 16.276 33.206 C 15.243 32.337 14.031 32.072 12.886 31.961 L 12.763 31.258 L 12.763 31.258 L 12.763 31.258 L 12.763 31.258 Z  M 13.527 34.747 C 14.159 34.643 15.456 35.183 16.966 36.3 L 17.04 36.695 C 16.008 35.826 14.817 35.465 13.672 35.354 L 13.527 34.747 L 13.527 34.747 L 13.527 34.747 Z  M 13.81 36.362 C 15.065 36.442 16.262 36.999 17.136 37.918 L 16.951 38.251 C 15.836 37.418 15.023 37.12 13.955 36.969 L 13.81 36.362 L 13.81 36.362 Z " fill-rule="evenodd" fill="rgb(211,68,74)"/><path d=" M 3.558 8.674 C 3.359 7.871 3.351 7.078 3.55 6.289 C 4.337 7.394 5.114 8.735 5.249 10.233 C 5.166 8.9 5.249 8.016 5.415 7.76 C 6.446 9.201 6.778 10.099 6.589 11.075 L 7.155 12.18 L 6.658 12.263 C 5.927 12.745 5.006 12.915 3.923 12.802 C 4.041 12.11 4.603 11.567 5.622 11.186 C 4.185 11.836 2.864 11.909 1.685 11.435 C 2.121 10.698 2.95 10.311 4.185 10.288 C 4.055 10.043 3.94 9.798 3.846 9.555 C 2.505 9.777 1.227 9.54 0 8.831 C 1.177 8.204 2.367 8.156 3.558 8.674 Z " fill="rgb(211,68,74)"/><path d=" M 12.746 37.669 C 12.856 37.272 12.98 36.879 13.114 36.491 L 13.17 36.339 L 13.475 36.445 L 13.419 36.597 C 13.23 37.147 13.064 37.706 12.92 38.269 C 12.823 38.671 12.749 39.073 12.703 39.479 C 12.701 39.495 12.699 39.511 12.698 39.527 C 13.874 39.957 14.766 40.622 15.348 41.497 C 14.314 41.432 13.429 41.178 12.682 40.72 C 12.683 40.729 12.684 40.737 12.685 40.745 C 12.699 40.879 12.722 41.013 12.749 41.147 C 12.81 41.41 12.897 41.669 13.013 41.913 C 13.073 42.044 13.137 42.172 13.203 42.298 C 14.297 42.117 15.364 42.347 16.393 42.975 C 15.336 43.375 14.427 43.401 13.648 43.04 C 13.81 43.282 13.98 43.523 14.163 43.752 C 14.421 44.079 14.685 44.394 14.962 44.703 L 15.02 44.768 C 16.027 45.121 16.578 45.843 16.682 46.947 C 15.577 46.513 14.923 45.837 14.731 44.931 L 14.722 44.92 C 14.44 44.606 14.167 44.283 13.909 43.95 C 13.738 43.733 13.578 43.513 13.425 43.283 C 13.514 44.189 13.357 45.061 12.941 45.889 C 12.421 44.522 12.427 43.4 12.949 42.51 C 12.87 42.358 12.793 42.206 12.722 42.052 C 12.597 41.784 12.5 41.502 12.435 41.216 C 12.417 41.135 12.402 41.052 12.387 40.969 C 12.091 41.545 11.602 42.036 10.914 42.436 C 11.041 41.09 11.528 40.157 12.362 39.627 C 12.368 39.566 12.374 39.505 12.38 39.442 C 12.426 39.06 12.492 38.681 12.581 38.307 C 11.643 39.232 10.721 39.496 9.837 39.121 C 10.198 38.194 11.162 37.705 12.746 37.669 Z " fill-rule="evenodd" fill="rgb(211,68,74)"/></g></svg>',
  holly: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 18.455 36.89" width="18.455pt" height="36.89pt"><defs><clipPath id="_clipPath_b2WWPp2W8jPBSFOCfALwoEMrYh1HJ2JK"><rect width="18.455" height="36.89"/></clipPath></defs><g clip-path="url(#_clipPath_b2WWPp2W8jPBSFOCfALwoEMrYh1HJ2JK)"><path d=" M 8.015 17.542 C 8.345 15.375 7.205 14.148 4.548 13.815 C 6.035 12.218 5.866 10.511 3.995 8.646 C 5.805 7.953 6.929 5.897 7.317 2.431 C 8.858 3.689 10.166 3.274 11.194 1.138 C 12.732 1.959 14.902 1.647 17.655 0.154 C 15.185 2.485 15.467 4.49 18.455 6.123 C 15.255 8.953 14.943 10.733 17.471 11.415 C 15.188 12.928 14.465 14.852 15.255 17.137 C 13.607 16.304 11.9 16.812 10.086 18.614 C 9.391 15.583 10.351 11.292 12.917 5.692 C 10.73 6.494 9.112 10.46 8.015 17.542 Z " fill="rgb(74,149,79)"/><path d=" M 1.779 23.045 C 1.757 21.875 1.004 19.599 1.041 18.614 C 0.665 16.776 0.975 15.287 1.037 13.032 C 1.039 12.954 1.067 12.949 1.099 13.019 C 3.127 17.435 4.784 19.01 6.579 17.937 C 8.856 22.603 10.677 23.952 11.994 21.937 C 12.203 25.079 13.983 26.572 17.286 26.368 C 15.487 28.176 15.872 31.043 18.394 34.921 C 15.74 34.913 13.741 35.601 12.302 36.89 C 11.045 34.264 9.297 33.48 7.01 34.49 C 6.645 31.372 5.04 29.993 2.148 30.306 C 2.933 27.884 2.457 25.726 0.672 23.783 C 1.135 24.044 1.799 24.037 1.779 23.045 Z  M 3.256 20.337 C 6.16 26.87 9.93 30.762 14.517 31.967 C 10.312 29.041 6.59 25.196 3.256 20.337 Z " fill-rule="evenodd" fill="rgb(74,149,79)"/><path d=" M 0.7 2.407 C 0.7 1.078 1.778 0 3.106 0 C 4.435 0 5.513 1.078 5.513 2.407 C 5.513 3.735 4.435 4.813 3.106 4.813 C 1.778 4.813 0.7 3.735 0.7 2.407 Z  M 3.032 1.953 C 3.032 1.69 3.245 1.476 3.508 1.476 C 3.771 1.476 3.985 1.69 3.985 1.953 C 3.985 2.216 3.771 2.429 3.508 2.429 C 3.245 2.429 3.032 2.216 3.032 1.953 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 14.026 19.228 C 13.664 18.049 14.881 16.898 16.114 16.898 C 17.347 16.898 18.348 17.899 18.348 19.132 C 18.348 20.365 17.33 21.57 16.114 21.366 C 15.201 21.213 14.362 20.323 14.026 19.228 Z  M 16.085 18.772 C 16.085 18.537 16.275 18.346 16.51 18.346 C 16.745 18.346 16.936 18.537 16.936 18.772 C 16.936 19.007 16.745 19.198 16.51 19.198 C 16.275 19.198 16.085 19.007 16.085 18.772 Z " fill-rule="evenodd" fill="rgb(254,71,29)"/><path d=" M 0.178 34.494 C -0.302 33.367 0.223 32.063 1.349 31.584 C 2.476 31.104 3.779 31.629 4.259 32.755 C 4.385 33.05 4.441 33.356 4.437 33.657 C 2.219 33.165 2.23 33.382 4.345 34.252 C 4.164 34.865 3.721 35.395 3.088 35.665 C 1.961 36.145 0.657 35.62 0.178 34.494 Z " fill="rgb(254,71,29)"/></g></svg>'
}

function shadeColor2(color, percent) {   
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}
function trimArray(arr) {
  for(i=0;i<arr.length;i++)
    arr[i]=arr[i].trim();
  return arr;
}
function stripMD(results) {
  var record={}
  var keys=Object.keys(results);
  for(i=0;i<keys.length;i++) {
    if(keys[i]!=='$loki' && keys[i]!=='meta')
      record[keys[i]]=results[keys[i]]
  }
  return record
}
