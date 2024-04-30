var dialogsRepoLisMensualidades = {};
var pcbRepoLisMenOrg = {};
var pcbRepoLisMenSuborg = {};
var pcbRepoLisMenCarrera = {};
var pcbRepoLisMenPeriodo = {};
var pcbRepoLisMenConcepto = {};
var calendarRepoLisMenDesde = {};
var calendarRepoLisMenHasta = {};
var imgButtonsRepoLisMenVerPrmMes = {};
var imgButtonsRepoLisMenVerMoFeIn = {};
var imgButtonsRepoLisMenVerMoFrPg = {};
var imgButtonsRepoLisMenSalir = {};
var mwRepoLisMensualidades = {};//minWindow

var RepoLisMensualidades = {
    windowName: 'RepoLisMensualidades',
    isCreate: false,
    
    show : function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
			this.limpiar();			
		dialogsRepoLisMensualidades.show();
	},
	
	hide : function() {
		dialogsRepoLisMensualidades.hide();
	},
	
    createMWs: function() {
        mwRepoLisMensualidades = desktop.addMinWindow('Mensualidades', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisMensualidades.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoLisMensualidades_Init : function() {
        dialogsRepoLisMensualidades.setMinimizeXY(0,0);
        dialogsRepoLisMensualidades.setCenterScreen();
        dialogsRepoLisMensualidades.addObject(pcbRepoLisMenOrg,10,30);
        dialogsRepoLisMensualidades.addObject(pcbRepoLisMenSuborg,10,60);
        dialogsRepoLisMensualidades.addObject(pcbRepoLisMenCarrera,10,90);
        dialogsRepoLisMensualidades.addObject(pcbRepoLisMenPeriodo,10,120);
        dialogsRepoLisMensualidades.addObject(pcbRepoLisMenConcepto,10,150);  
        dialogsRepoLisMensualidades.addObject(calendarRepoLisMenDesde.getEditCalendar(), 10, 180);
    	dialogsRepoLisMensualidades.addObject(calendarRepoLisMenHasta.getEditCalendar(), 10, 210);
        dialogsRepoLisMensualidades.addObject(imgButtonsRepoLisMenVerPrmMes,17,250);
        dialogsRepoLisMensualidades.addObject(imgButtonsRepoLisMenVerMoFeIn,202,250);
        dialogsRepoLisMensualidades.addObject(imgButtonsRepoLisMenVerMoFrPg,17,290);
        dialogsRepoLisMensualidades.addObject(imgButtonsRepoLisMenSalir,202,290);
    },

    create : function() {
    	dialogsRepoLisMensualidades = dialogs.create('dialogsRepoLisMensualidades',0,0,385,305,'RELACIÓN DE MENSUALIDADES');
    	dialogsRepoLisMensualidades.setAdjY(70);
    	pcbRepoLisMenOrg = powerComboBox.create('pcbRepoLisMenOrg','pcbRepoLisMenOrg','Organización :',1,100);
    	pcbRepoLisMenOrg.enableReadOnlyEditor();
    	pcbRepoLisMenOrg.addEmptyOption();
    	pcbRepoLisMenOrg.setValidEmpty();
    	pcbRepoLisMenOrg.setWidthCombo(250);
    	
    	pcbRepoLisMenSuborg = powerComboBox.create('pcbRepoLisMenSuborg','pcbRepoLisMenSuborg','Suborganización :',1,100);
    	pcbRepoLisMenSuborg.enableReadOnlyEditor();
    	pcbRepoLisMenSuborg.addEmptyOption();
    	pcbRepoLisMenSuborg.setValidEmpty();
    	pcbRepoLisMenSuborg.setWidthCombo(250);
    	
    	pcbRepoLisMenCarrera = powerComboBox.create('pcbRepoLisMenCarrera','pcbRepoLisMenCarrera','Carrera :',1,100);
    	pcbRepoLisMenCarrera.enableReadOnlyEditor();
    	pcbRepoLisMenCarrera.addEmptyOption();
    	pcbRepoLisMenCarrera.setValidEmpty();
    	pcbRepoLisMenCarrera.setFieldFind(true);
    	pcbRepoLisMenCarrera.setWidthCombo(250);
    	
    	pcbRepoLisMenPeriodo = powerComboBox.create('pcbRepoLisMenPeriodo','pcbRepoLisMenPeriodo','Periodo (+):',1,100);
    	pcbRepoLisMenPeriodo.enableReadOnlyEditor();
    	pcbRepoLisMenPeriodo.addEmptyOption();
    	pcbRepoLisMenPeriodo.setValidEmpty();
    	pcbRepoLisMenPeriodo.setWidthCombo(138);
    	
    	pcbRepoLisMenConcepto = powerComboBox.create('pcbRepoLisMenConcepto','pcbRepoLisMenConcepto','Concepto (+):',1,100);
    	pcbRepoLisMenConcepto.enableReadOnlyEditor();
    	pcbRepoLisMenConcepto.addEmptyOption();
    	pcbRepoLisMenConcepto.setValidEmpty();
    	pcbRepoLisMenConcepto.setDataType("string");
    	pcbRepoLisMenConcepto.setTypeObjOpt('input', 'checkbox');
    	pcbRepoLisMenConcepto.setFirstRowCheckMode(2);	
    	pcbRepoLisMenConcepto.setWidthCombo(250);
    	
    	calendarRepoLisMenDesde = calendars.create('calendarRepoLisMenDesde');      
    	calendarRepoLisMenDesde.setCaption('Fecha Pago Desde :',1,102);
      	calendarRepoLisMenDesde.setValidEmpty();
		calendarRepoLisMenDesde.setWidthEditCalendar(127);
    	calendarRepoLisMenDesde.sendToFrom(100);
    	calendarRepoLisMenDesde.setFieldFind(true);
      	
      	calendarRepoLisMenHasta = calendars.create('calendarRepoLisMenHasta');      
    	calendarRepoLisMenHasta.setCaption('Fecha Pago Hasta :',1,102);
      	calendarRepoLisMenHasta.setValidEmpty();
		calendarRepoLisMenHasta.setWidthEditCalendar(127);
    	calendarRepoLisMenHasta.sendToFrom(100);
    	calendarRepoLisMenHasta.setFieldFind(true);
    	calendarRepoLisMenDesde.setValidGreaterThan(calendarRepoLisMenHasta);
    	
    	imgButtonsRepoLisMenVerPrmMes = imgButtons.create('imgButtonsRepoLisMenVerPrmMes','Ver Promedio Mensual','print.png');
    	imgButtonsRepoLisMenVerMoFeIn = imgButtons.create('imgButtonsRepoLisMenVerMoFeIn','Ver Monto Fecha Inscrito','print.png');
    	imgButtonsRepoLisMenVerMoFrPg = imgButtons.create('imgButtonsRepoLisMenVerMoFrPg','Ver Monto Forma Pago','print.png');
    	imgButtonsRepoLisMenSalir = imgButtons.create('imgButtonsRepoLisMenSalir','Salir','salir.png');
    	imgButtonsRepoLisMenVerPrmMes.setDimension(160,22);
    	imgButtonsRepoLisMenVerMoFeIn.setDimension(160,22);
    	imgButtonsRepoLisMenVerMoFrPg.setDimension(160,22);
    	imgButtonsRepoLisMenSalir.setDimension(160,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsRepoLisMensualidades_Init();
  		this.createMWs();
  	},

  	limpiar : function() {
  		pcbRepoLisMenOrg.setSelectedIndex(0);
  		pcbRepoLisMenSuborg.clear();
  		pcbRepoLisMenCarrera.clear();
  		pcbRepoLisMenPeriodo.clear();
  		dialogsRepoLisMensualidades.setMsg("");
		Tool.cnnSrv("ReportObject", "getRepoLisAluSinConPagoInit", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisMensualidades, pcbRepoLisMenOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsRepoLisMensualidades, pcbRepoLisMenConcepto, 0, 1, json('getConceptos'));
		Tool.getContext(dialogsRepoLisMensualidades, pcbRepoLisMenOrg, pcbRepoLisMenSuborg, pcbRepoLisMenCarrera, this.windowName + ".loadDataMensualidadInit()");
	},
    
    loadDataMensualidadInit: function() {
		Tool.getPowerComboDataFnc('pcbRepoLisMenCarrera.setSelectedIndex(0);pcbRepoLisMenPeriodo.setSelectedIndex(1);', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisMensualidades, pcbRepoLisMenPeriodo, 0, 1, pcbRepoLisMenCarrera.setModeReturnGetText(5));
    },
	
	setEvents: function() {
		pcbRepoLisMenOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisMenSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisMenPeriodo.onChange(this.windowName + ".resetElements('per')");
    	imgButtonsRepoLisMenVerPrmMes.onClick(this.windowName + ".coreUpdate('prm')");
    	imgButtonsRepoLisMenVerMoFeIn.onClick(this.windowName + ".coreUpdate('fch')");
    	imgButtonsRepoLisMenVerMoFrPg.onClick(this.windowName + ".coreUpdate('frm')");
        imgButtonsRepoLisMenSalir.onClick('dialogsRepoLisMensualidades.close()');
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			pcbRepoLisMenSuborg.clear();
	  		pcbRepoLisMenCarrera.clear();
	  		pcbRepoLisMenPeriodo.clear();
	    	if (pcbRepoLisMenOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisMensualidades, pcbRepoLisMenSuborg, 1, 2, pcbRepoLisMenOrg);
		}
		else if (element == 'suborg') {
	  		pcbRepoLisMenCarrera.clear();
	  		pcbRepoLisMenPeriodo.clear();
	    	if (pcbRepoLisMenSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisMensualidades, pcbRepoLisMenCarrera, -1, 3, pcbRepoLisMenSuborg);
		}
	},
	
	reporte : function(tiporeporte) {
		if (tiporeporte == 'prm') {
			this.reportePromedio();
		}
		else if (tiporeporte == 'fch') {
			this.reporteFechaInscrito();
		}
		else {
			this.reporteFormaPago();
		}	
	},

	reporteFechaInscrito : function() {
	  	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1060,42);
		
		////////rep = new Report('portrait');
    	////////rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(180,180,180,0.4),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+pcbRepoLisMenOrg.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+pcbRepoLisMenSuborg.getOption(),false);
		rep.addText(20, 63, 'PERIODO:         '+pcbRepoLisMenPeriodo.getOption(),false);
		rep.addText(500, 43, 'FECHA DESDE: '+calendarRepoLisMenDesde.getFechaFromEdit(),false);
		rep.addText(500, 63, 'FECHA HASTA: '+calendarRepoLisMenHasta.getFechaFromEdit(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(180,180,180,0.4),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(300, 106, 'RELACIÓN DE MENSUALIDADES (FECHA INSCRITO)',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoEstNoIns',['C.i.','Apellido','Nombre','Carrera','Posición','Sección','Fecha Inscrito','Fecha Pago','Monto Bs.'],565,120);
		rep.setTotalRowTable(22);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([140,200,200,160,70,60,100,100,100]);
        rep.setAlignData(['right','left','left','left','center','center','center','center','left']); 
        rep.addJsonData('TablaRepoEstNoIns','getRelacionMensualidad',[0,1,2,3,4,5,6,7,8]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
    
	reporteFormaPago : function() {
	  	///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1060,42);
		
		////////rep = new Report('portrait');
    	////////rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(180,180,180,0.4),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+pcbRepoLisMenOrg.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+pcbRepoLisMenSuborg.getOption(),false);
		rep.addText(20, 63, 'PERIODO:         '+pcbRepoLisMenPeriodo.getOption(),false);
		rep.addText(500, 43, 'FECHA DESDE: '+calendarRepoLisMenDesde.getFechaFromEdit(),false);
		rep.addText(500, 63, 'FECHA HASTA: '+calendarRepoLisMenHasta.getFechaFromEdit(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(180,180,180,0.4),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(300, 106, 'RELACIÓN DE MENSUALIDADES (FORMA PAGO)',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoEstNoIns',['C.i.','Apellido','Nombre','Carrera','Posición','Sección','Fecha Pago','Forma Pago','Monto Bs.'],565,120);
		rep.setTotalRowTable(22);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([140,200,200,160,70,60,100,100,100]);
        rep.setAlignData(['right','left','left','left','center','center','center','center','left']); 
        rep.addJsonData('TablaRepoEstNoIns','getRelacionMensualidad',[0,1,2,3,4,5,6,7,8]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},

	reportePromedio : function() {
		//*************************************** DATA CABECERA ***************************************
		var je = json('getEncabezado');
		var institucion = je.data[0][0].toUpperCase();
		var telefono =je.data[3][0].toUpperCase();
		var codAvec = (je.data[1][0].toUpperCase()=='NULL')? '' : je.data[1][0].toUpperCase();
		var ciudad = je.data[4][0].toUpperCase();
		var direccion = je.data[2][0].toUpperCase();
		var entFederal = je.data[5][0].toUpperCase(); 
		var director = je.data[6][0];
		var ciDirector = je.data[7][0];
		var fecha = Tool.getDate();
		//****************************************** DATA TABLA ***************************************
		var jt = json('getRelacionMensualidad');
		var levelAcad = jt.data[2];
		var grados = jt.data[3];
		var totalAlumnos = jt.data[4];		  
		var promedios = jt.data[5];
		var nCuotas =12;
		//*******************************************************************************
		var rep = new Report('landscape');
		var t1 = 0;
		var t2 = 0;
		var t3 = 0;		  	
		var nivelAcad = new Array();
		var totNivel = new Array();
		//***************************************** DATA VARIABLE *****************************************
		function setNivelAcad(){
	  		var idx = 0;
			for(var i=0; i<jt.data[2].length; i++){
				if(i==0){
		  			nivelAcad[i]=jt.data[2][i];
		  			totNivel[i]=1;
		  		}
		  		else{
		  			idx = nivelAcad.length - 1;	
		  			if(nivelAcad[idx]!=jt.data[2][i]){
		  				nivelAcad[idx+1]=jt.data[2][i];
		  				totNivel[idx+1]=1;	
		  			}	
		  			else{
		  				totNivel[idx]++;
		  			}
				};
			};
		};
			  	
		function addData(x, y){
	  		var xi = x - 58;
			var yi = y + 29.5;
			for(var i=0; i<grados.length; i++){
				//NIVEL ACADEMICO
				rep.addText(16, yi + i*7, levelAcad[i],false,true);	
				
				//GRADOS
				rep.addText(xi, yi + i*7, grados[i],false,true);
		  	    
		  		//TOTAL ALUMNOS
		  		rep.addText(xi+60, yi + i*7, totalAlumnos[i]+'',false,true);
		  		//PROMEDIOS
		  	    
		  		rep.addText(xi+90, yi + i*7, parseFloat(promedios[i]).toFixed(2)+'',false,true);
		  		//TOTAL MENSUAL
		  	    
		  		var tm = '';
		  		if(totalAlumnos[i].trim()!=''){
		  			t1 += parseInt(totalAlumnos[i]);
		  	    	t2 += parseInt(totalAlumnos[i]) * parseFloat(promedios[i]);
		  	    	tm = (parseInt(totalAlumnos[i]) * parseFloat(promedios[i])).toFixed(2) + '';
		  		};
		  	    
		  		rep.addText(xi+120, yi + i*7, tm+'',false,true);
		  		//NUMERO DE CUOTAS
		  		rep.addText(xi+150, yi + i*7, nCuotas+'',false,true);
		  		//TOTAL ANUAL
		  		var ta = '';
		  		if(tm.trim()!=''){
		  			t3 += tm * nCuotas;
		  	    	ta =  tm * nCuotas;
		  		};
		  		rep.addText(xi+180, yi + i*7, ta.toFixed(2) + '',false,true);
			}  		  	  
			rep.addText(x + 2 , y + 138 , t1+'',false,true);
			rep.addText(x + 62 , y + 138 , t2.toFixed(2)+'',false,true);
			rep.addText(x + 122 , y + 138 , t3.toFixed(2)+'',false,true);
		};
			//*************************************************************************************************
		function init() {
			rep.setNoRepeatHead();
			//rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
			//rep.addBar(0,0,297,15,rep.getRGBAObj(220,220,220,0.3),false,true);
        	//rep.addText(77, 10, 'ASOCIACION VENEZOLANA DE EDUCACION CATOLICA - AVEC',false,true);
        	rep.addBar(0,15,297,30,rep.getRGBAObj(240,240,240,0.3),false,true);
        	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','bold');
        	rep.addText(2, 20, 'INSTITUCION : '+institucion,false,true);                
        	rep.addText(90, 20, 'CÓDIGO : '+codAvec,false,true);
        	rep.addText(160, 20, 'DIRECCION : '+direccion,false,true);
        	rep.addText(2, 25, 'TELEFONO : '+telefono,false,true);
        	rep.addText(90, 25, 'CIUDAD : '+ciudad,false,true);
        	rep.addText(90, 30, 'FECHA DESDE : '+calendarRepoLisMenDesde.getFechaFromEdit(),false,true);
        	rep.addText(160, 25, 'ENTIDAD FEDERAL : '+entFederal,false,true);
        	rep.addText(160, 30, 'FECHA HASTA : '+calendarRepoLisMenHasta.getFechaFromEdit(),false,true);
        	rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
        	rep.addText(115,40,'RELACIÓN DE MENSUALIDADES (Monto en $)',false,true);
		};

		function head(x, y){
			//setNivelAcad();
			rep.addAbsTable(x, y, [30,30,30,30,30], 1, 10, false,true);
			rep.addAbsTable(x - 120, y + 10, [60,60], 1, 15, false,true);
		  	  
			rep.addAbsTable(x, y + 10, [150], 1, 5, false,true);
			rep.addAbsTable(x, y + 15, [30,30,30,30,30], 1, 10, false,true);
	  		
			//rep.addText(x - 116, y + 29.5 +0*(7+7*1) , nivelAcad[0],false,true);		
			//for(var nt=1; nt<totNivel.length; nt++){		  	  	
				//rep.addAbsTable(x - 120, y + 25 + nt*(7+7*totNivel[nt]), [60], 1, 7*totNivel[nt], false,true);
		  		//rep.addText(x - 116, y + 29.5 +nt*(7+7*totNivel[nt-1]) , nivelAcad[nt],false,true);		
		  		//rep.addAbsTable(x - 60, y + 25 + nt*(7+7*totNivel[nt]), [60,30,30,30,30,30], totNivel[nt], 7, false,true);
			//}
			//************************************* DATA FIJA ******************************************
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
			for(var i=0; i<5; i++)
				rep.addText(x + 14 +i*30, y + 6 , i+'',false,true);

			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
		  	  
			rep.addText(x - 95, y + 16.5 , 'NIVEL',false,true);
			rep.addText(x - 101.5, y + 20.5 , 'EDUCATIVO',false,true);
			 	  
			rep.addText(x - 38, y + 16.5 , 'GRADO',false,true);
			rep.addText(x + 50, y + 13.5 , 'AÑO ESCOLAR '+ pcbRepoLisMenPeriodo.getValue(),false,true);
			rep.addText(x+1 , y + 18.5 , 'Nº de Alumnos',false,true);
			rep.addText(x+1 , y + 22.5 , 'Activos',false,true);
			rep.addText(x+36 , y + 18.5 , 'Promedio',false,true);
			rep.addText(x+32 , y + 22.5 , 'Mens./Alumn.',false,true);
			rep.addText(x+61.5 , y + 18.5 , 'Total Mensual',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
			rep.addText(x+62 , y + 22.5 , '(Col N°1 x Col N°2)',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),12,'helvetica','bold');
			rep.addText(x+92.5 , y + 21.5 , 'Nº de Cuotas',false,true);
			rep.addText(x+123.5, y + 18.5 , 'Total Anual',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
			rep.addText(x+122 , y + 22.5 , '(Col N°2 x Col N°3)',false,true);
			rep.setFontProperties(rep.getRGBAObj(0,0,0,1),11,'helvetica','bold');
			rep.addText(x - 14, y + 138 , 'TOTAL:',false,true);
			rep.addAbsTable(x, y + 134, [30], 1, 6, false,true);
			rep.addAbsTable(x + 60, y + 134, [30], 1, 6, false,true);
			rep.addAbsTable(x + 120, y + 134, [30], 1, 6, false,true);
			rep.addText(20, y + 145 , 'NOMBRE DEL DIRECTOR : '+director,false,true);
			rep.addText(20, y + 148.5 , 'CEDULA DE IDENTIDAD : '+ciDirector,false,true);
			rep.addText(20, y + 151.5 , 'FECHA : '+fecha,false,true);
			//******************************************************************************************			  	  
		};
			  	
		function view(){
			rep.printPDF();
		};
		  	
		init();	
        head(132,48);
    	addData(132,48);
    	rep.render();
    	setTimeout(view,1000);
	},
	
	coreUpdate: function(tiporeporte) {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoLisMenOrg.valid(dialogsRepoLisMensualidades))
			if (pcbRepoLisMenSuborg.valid(dialogsRepoLisMensualidades))
				if (pcbRepoLisMenPeriodo.valid(dialogsRepoLisMensualidades)) 
					if (pcbRepoLisMenConcepto.valid(dialogsRepoLisMensualidades)) 
						if (calendarRepoLisMenDesde.getText() == '' || calendarRepoLisMenDesde.valid(dialogsRepoLisMensualidades)) 
							if (calendarRepoLisMenHasta.getText() == '' || calendarRepoLisMenHasta.valid(dialogsRepoLisMensualidades)) {
								rlx.add('reg', pcbRepoLisMenOrg);
								rlx.add('reg', pcbRepoLisMenConcepto);
								rlx.add('reg', pcbRepoLisMenPeriodo);
								rlx.add('reg', pcbRepoLisMenCarrera.setModeReturnGetText(2));
								rlx.add('reg', calendarRepoLisMenDesde);
								rlx.add('reg', calendarRepoLisMenHasta);
								rlx.addStr('reg', tiporeporte);
								Tool.cnnSrv('ReportObject','getRelacionMensualidad', this.windowName + '.reporte("' + tiporeporte + '")', rlx);
							}
    }
}
