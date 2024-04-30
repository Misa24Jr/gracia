var dialogsCalcMontos = {};
var editsCalcMonConcepto = {};
var editsCalcMonMonto = {};
var editsCalcMonUC = {};
var editsCalcMonMonInicial = {};
var editsCalcMonPorInicial = {};
var editsCalcMonMonFinaciado = {};
var pcbCalcMonMesVenc = {};
var imagesCalcMonIncluir = {};
var editsCalcMonNumCuotas = {};
var gridsCalcMontos = {};
var imgButtonsCalcMonCredito = {};
var imgButtonsCalcMonLimpiar = {};
var imgButtonsCalcMonSalir = {};
var checboxMantAsiPerAutChequeo = {};
var mwCalcMontos = {};// minWindow

var CalcMontos = {
	windowName : 'CalcMontos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}

		if (dialogsCalcMontos.isByClean())
 			this.limpiar();			
		Pagos.calcMontoActive = true;		
		dialogsCalcMontos.showModal();
	},
	
	hide : function() {
		dialogsCalcMontos.hide();
	},
	
	createMWs : function() {
        mwCalcMontos  = desktop.addMinWindow('C.Montos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCalcMontos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsCalcMontos_Init : function() {
        dialogsCalcMontos.setMinimizeXY(0,0);
        dialogsCalcMontos.setCenterScreen();
        dialogsCalcMontos.addObject(editsCalcMonConcepto,20,38);
		dialogsCalcMontos.addObject(editsCalcMonMonto, 420,38);
		dialogsCalcMontos.addObject(editsCalcMonMonFinaciado, 20,63);
		dialogsCalcMontos.addObject(editsCalcMonNumCuotas, 239,63);
		dialogsCalcMontos.addObject(checboxMantAsiPerAutChequeo, 420, 65);
		dialogsCalcMontos.addObject(gridsCalcMontos.getObject(),20,98);
        dialogsCalcMontos.addObject(imgButtonsCalcMonCredito,140,390);
        dialogsCalcMontos.addObject(imgButtonsCalcMonLimpiar,260,390);
        dialogsCalcMontos.addObject(imgButtonsCalcMonSalir,380,390);       
	},
  
	gridsCalcMontos_Init : function()  {
        gridsCalcMontos.setFixColRow(false,true);
        gridsCalcMontos.addTitleVectorX(['Nº Cuota','Monto $','Fecha Vencimiento','idPers','idPeriodo','idConc','idCarr','moInic','moCred','poCred']);
        gridsCalcMontos.showData();        
        gridsCalcMontos.setSizeCol(1,160);
        gridsCalcMontos.setSizeCol(2,160);
        gridsCalcMontos.setSizeCol(3,250);
        gridsCalcMontos.setSizeCol(4,0);
        gridsCalcMontos.setSizeCol(5,0);
        gridsCalcMontos.setSizeCol(6,0);
        gridsCalcMontos.setSizeCol(7,0);
        gridsCalcMontos.setSizeCol(8,0);
        gridsCalcMontos.setSizeCol(9,0);
        gridsCalcMontos.setSizeCol(10,0);
        gridsCalcMontos.hideCol(4);
        gridsCalcMontos.hideCol(5);
        gridsCalcMontos.hideCol(6);
        gridsCalcMontos.hideCol(7);
        gridsCalcMontos.hideCol(8);
        gridsCalcMontos.hideCol(9);
        gridsCalcMontos.hideCol(10);
        gridsCalcMontos.setXMLStruct(xmlStructs);
	},

	create : function() {
		dialogsCalcMontos = dialogs.create('dialogsCalcMontos',0,0,616,380,'CALCULAR MONTOS');
		dialogsCalcMontos.setEnableMinimize(false);
		editsCalcMonConcepto = edits.create('editsCalcMonConcepto','editsCalcMonConcepto','Concepto:',3,90,'normal');
		editsCalcMonConcepto.setValidEmpty();
		editsCalcMonConcepto.readOnly(true);
        editsCalcMonConcepto.setSizeEdit(274);
		editsCalcMonConcepto.setMaxLength(150);
		editsCalcMonMonto = edits.create('editsCalcMonMonto','editsCalcMonMonto','Monto Cuota:',3,91,'normal');
		editsCalcMonMonto.setValidEmpty();
		editsCalcMonMonto.readOnly(true);
		editsCalcMonMonto.setSizeEdit(80);
		editsCalcMonUC = edits.create('editsCalcMonUC','editsCalcMonUC','Total U.C.:',3,77,'normal');
		editsCalcMonUC.setValidEmpty();
		editsCalcMonUC.setSizeEdit(92);
		editsCalcMonMonInicial = edits.create('editsCalcMonMonInicial','editsCalcMonMonInicial','Monto Inic.:',3,77,'normal');
		editsCalcMonMonInicial.setValidEmpty();
		editsCalcMonMonInicial.readOnly(true);
		editsCalcMonPorInicial = edits.create('editsCalcMonPorInicial','editsCalcMonPorInicial','% Inicial:',3,73,'normal');
		editsCalcMonPorInicial.setValidEmpty();
		editsCalcMonPorInicial.readOnly(true);
		editsCalcMonPorInicial.setSizeEdit(92);
		editsCalcMonMonInicial.setSizeEdit(92);
		editsCalcMonMonFinaciado = edits.create('editsCalcMonMonFinaciado','editsCalcMonMonFinaciado','Monto $:',3,90,'normal');
		editsCalcMonMonFinaciado.setValidEmpty();
		editsCalcMonMonFinaciado.readOnly(true);
		editsCalcMonMonFinaciado.setSizeEdit(92);
		editsCalcMonNumCuotas = edits.create('editsCalcMonNumCuotas','editsCalcMonNumCuotas','N° Cuota:',3,73,'normal');
		editsCalcMonNumCuotas.setValidEmpty();
		editsCalcMonNumCuotas.readOnly(true);
		editsCalcMonNumCuotas.setSizeEdit(82);
		checboxMantAsiPerAutChequeo = checkBox.create('checboxMantAsiPerAutChequeo','Una Cuota',true);
		pcbCalcMonMesVenc = powerComboBox.create('pcbCalcMonMesVenc', 'pcbCalcMonMesVenc', 'Mes Venc.:', 3,73);
	  	pcbCalcMonMesVenc.enableReadOnlyEditor();
	  	pcbCalcMonMesVenc.addEmptyOption();
	  	pcbCalcMonMesVenc.setValidEmpty();
		pcbCalcMonMesVenc.setWidthCombo(71);
        pcbCalcMonMesVenc.setTypeObjOpt('input', 'checkbox');
        pcbCalcMonMesVenc.setFirstRowCheckMode(2);
        imagesCalcMonIncluir = images.create('imagesCalcMonIncluir','imagesCalcMonIncluir','images/curve_1.png');
        imagesCalcMonIncluir.setSize(19,19);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		hint.addToHintWithRefreshPos(imagesCalcMonIncluir, dialogsCalcMontos,"Incluir Mes",370,70,false,true);
		gridsCalcMontos = grids.create('gridsCalcMontos',12,10);
		imgButtonsCalcMonCredito = imgButtons.create('imgButtonsCalcMonCredito','Guardar.','ok.png');
		imgButtonsCalcMonLimpiar = imgButtons.create('imgButtonsCalcMonLimpiar','Limpiar','limpiar.png');
		imgButtonsCalcMonSalir = imgButtons.create('imgButtonsCalcMonSalir','Salir','salir.png');
        imgButtonsCalcMonCredito.setDimension(94,22);
        imgButtonsCalcMonLimpiar.setDimension(94,22);
        imgButtonsCalcMonSalir.setDimension(94,22);
	},

	init : function() {
		this.create();
		this.setEvents();
		this.dialogsCalcMontos_Init();
		this.gridsCalcMontos_Init();
		this.createMWs(); 
	},

  	limpiar : function() {
  		editsCalcMonConcepto.setValue("");
  		editsCalcMonMonto.setValue("");
  		editsCalcMonNumCuotas.setValue("");
  		editsCalcMonPorInicial.setValue("");
  		editsCalcMonMonInicial.setValue("");
  		editsCalcMonMonFinaciado.setValue("");
  		editsCalcMonUC.setValue("");
  		gridsCalcMontos.clean();
  		imgButtonsCalcMonCredito.setDisable();
  		dialogsCalcMontos.setMsg("");
  		editsCalcMonConcepto.setValue(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0));
  		editsCalcMonMonto.setValue(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 6));
  		editsCalcMonNumCuotas.setValue(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 8));
  		editsCalcMonPorInicial.setValue(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 3));

		editsCalcMonMonFinaciado.readOnly(true);
  		if (gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 11) == "SI")
  			editsCalcMonMonFinaciado.readOnly(false);
  		
  		if (gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 9) == "SI") { //con UC
  			editsCalcMonUC.show();
  		}
  		else { //sin UC
  			editsCalcMonUC.hide();
  	  		var m = parseFloat(editsCalcMonMonto.getValue(),10);
  			var mi = m * parseFloat(editsCalcMonPorInicial.getValue(),10)/100;
  			var mf = m - mi;
  			editsCalcMonMonInicial.setValue(mi);	
  			editsCalcMonMonFinaciado.setValue(mf);
  		}
  		pcbCalcMonMesVenc.clear();
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'ENERO','01');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'FEBRERO','02');
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'MARZO','03');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'ABRIL','04');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'MAYO','05');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'JUNIO','06');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'JULIO','07');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'AGOSTO','08');
		pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'SEPTIEMBRE','09');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'OCTUBRE','10');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'NOVIEMBRE','11');
        pcbCalcMonMesVenc.addOptionAndSimpleValue(null, 'DICIEMBRE','12');
        pcbCalcMonMesVenc.setCheckEnable(['01','02','03','04','05','06','07','08','09','10','11','12']);
  		pcbCalcMonMesVenc.setSelectedIndex(1);
		this.calcCuotas();
  	},
  	
  	calcCuotas : function() {
		var dStruct = {
			type      : 'E',
  			offsetPage: 0,
  			pageSize  : 10,
  			itemPage  : 0,
  			fields    : ['Cuota','Monto','Fecha de vencimiento','idPers','idPeriodo','idConc','idCarr','moInic','moCred','poCred'],
  			data 	  : [[],[],[],[],[],[],[],[],[],[]]
		}

		if (pcbCalcMonMesVenc.valid(dialogsCalcMontos) && (editsCalcMonUC.getValue() != "" || !editsCalcMonUC.sts_Show)) {
			if (editsCalcMonMonFinaciado.isReal(editsCalcMonMonFinaciado.getValue())) {
				var cc = parseInt(editsCalcMonNumCuotas.getValue(),10);
	  			var dp = gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 2);
	  			var mm = parseInt(pcbCalcMonMesVenc.getArrayValue(pcbCalcMonMesVenc.getItemIndex())[0],10);
	  			mm = (mm != -1)? mm : parseInt(pcbCalcMonMesVenc.getArrayValue(1)[0],10);
	  			var fv = procPagos.calculaFechasVencimiento(12, dp, mm, '-');
//	  			var montoCuota = parseFloat(editsCalcMonMonFinaciado.getValue()) / cc; 
	  			var montoCuota = parseFloat(editsCalcMonMonFinaciado.getValue()); 
		        var ix = 0;
		        for(var i = 0; i < cc; i++) {
			        for(var ii = 1; ii <= 12; ii++) {
			        	if (parseInt(fv[i].substring(3,5),10) == parseInt(pcbCalcMonMesVenc.getArrayValue(ii)[0],10)) {
			  				if (pcbCalcMonMesVenc.getObjFromOption(ii).checked) {
			  					dStruct.data[0][ix] = ix+1;
				  				dStruct.data[1][ix] = new Number(montoCuota);
				  				dStruct.data[2][ix] = fv[i];
				  				dStruct.data[3][ix] = editsPagoCi.hideId;
				  				dStruct.data[4][ix] = pcbPagoPeriodo.setModeReturnGetText(0).getText();
				  				dStruct.data[5][ix] = gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 13);
				  				dStruct.data[6][ix] = gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 12);//idcarrera
				  				dStruct.data[7][ix] = editsCalcMonMonInicial.getValue();
				  				dStruct.data[8][ix] = editsCalcMonMonFinaciado.getValue();
				  				dStruct.data[9][ix] = editsCalcMonPorInicial.getValue();
				  				ix++;
			  				}
			  				break;
			        	}
			        }
	  			}
	  			gridsCalcMontos.loadDataStruct(dStruct);
	  			dialogsCalcMontos.setMsg('Cuotas calculadas.'); 
	  			imgButtonsCalcMonCredito.setEnable();
	  			imgButtonsCalcMonCredito.setFocus();
	  		}
	  		else {
	  			dialogsCalcMontos.setMsg('ADVERTENCIA: El monto financiado no es un valor real, verifique...'); 
	  			imgButtonsCalcMonCredito.setDisable();
	  		}
		}
		else 
			dialogsCalcMontos.setMsg('Haz Clic sobre el Mes donde comenzara el calculo.');
  	},
  	
	setEvents : function() {
		editsCalcMonMonFinaciado.onKeyUp(this.windowName + ".calcCuotas();editsCalcMonMonFinaciado.setFocus();");
  		gridsCalcMontos.onClickCells(this.windowName + ".borrarMesGrid()");
		imgButtonsCalcMonCredito.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsCalcMonLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsCalcMonSalir.onClick(this.windowName + ".closeWinsCalcMontos()");
  	},

  	borrarMesGrid : function() {
  		if (!checboxMantAsiPerAutChequeo.getChecked()) {
	  		gridsCalcMontos.cleanRow();
	  		gridsCalcMontos.firstPage();
	  		for(var i=1; i<=gridsCalcMontos.getTotalRecord(); i++) {  
	  			gridsCalcMontos.setDataCell(i,1,i);  
			}
	  		if (gridsCalcMontos.getTotalRecord() == 0) {
				this.limpiar();
			}
		}
		else {
	  		gridsCalcMontos.cleanAllRowLessOne();
	  		gridsCalcMontos.firstPage();
	  		for(var i=1; i<=gridsCalcMontos.getTotalRecord(); i++) {  
	  			gridsCalcMontos.setDataCell(i,1,i);  
			}
	  		if (gridsCalcMontos.getTotalRecord() == 0) {
				this.limpiar();
			}
		}
  	},

  	closeWinsCalcMontos : function() {
  		dialogsCalcMontos.close();
  		Pagos.calcMontoActive = false; 
  	},
  	
  	responseCoreUpdate : function() {
		gridsPagoRecConcepto.clean();
		dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);
		editsPagoRecConcepto.clear();
		editsPagoRecConcepto.setFocus();
  		Pagos.getDataGridCuota();
		dialogsCalcMontos.close();
		dlgWait.hide();
  	},
  	
	coreUpdate : function(methodName) {
		if (gridsCalcMontos.getTotalRecord() > 0) 
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.responseCoreUpdate()', gridsCalcMontos.getXMLStruct("rlxCredito"));
  	}
};