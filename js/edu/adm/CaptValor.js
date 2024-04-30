var dialogsCaptValor = new Object();
var editsCaptValIngMonto = new Object();
var editsCaptValIngMontoDolar = new Object();
var imgButtonsCaptValAceptar = new Object();
var imgButtonsCaptValCancelar = new Object(); 
var mwCaptValor = new Object();// minWindow

var CaptValor = {
    windowName: 'CaptValor',
    isCreate: false,
    indexCmb: 0,
	
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsCaptValor.isByClean()) {
      		editsCaptValIngMontoDolar.clear();
      		editsCaptValIngMonto.clear();
      		dialogsCaptValor.setMsg("");
        }
        dialogsCaptValor.showModal();
    },
    
    hide: function() {
        dialogsCaptValor.hide();
    },
    
    createMWs: function() {
        mwCaptValor = desktop.addMinWindow('Entrada', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsCaptValor.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsCaptValor_Init: function() {
        dialogsCaptValor.setMinimizeXY(0, 0);
        dialogsCaptValor.setCenterScreen();    
        dialogsCaptValor.addSpace(1, 0, 20);
        dialogsCaptValor.addLn(1, 1, 1);
		dialogsCaptValor.setHeightCell(1,1,18); 
		dialogsCaptValor.addObject(editsCaptValIngMontoDolar, 20, 25);
		dialogsCaptValor.addObject(editsCaptValIngMonto, 20, 50);
		dialogsCaptValor.addObject(imgButtonsCaptValAceptar, 62, 85);
        dialogsCaptValor.addObject(imgButtonsCaptValCancelar, 124, 85);
    },
    
    create: function() {
        dialogsCaptValor = dialogs.create('dialogsCaptValor', 0, 0, 230, 73, 'CONCEPTO');
        dialogsCaptValor.setAdjY(40);
        dialogsCaptValor.setEnableMinimize(false);
        editsCaptValIngMontoDolar = edits.create('editsCaptValIngMontoDolar', 'editsCaptValIngMontoDolar', 'Monto $:', 1,90, 'normal');    
        editsCaptValIngMontoDolar.setValidInteger();
		editsCaptValIngMontoDolar.setSizeEdit(100);
		editsCaptValIngMontoDolar.setMaxLength(12);
        editsCaptValIngMonto = edits.create('editsCaptValIngMonto', 'editsCaptValIngMonto', 'Monto Bs:', 1,90, 'normal');    
        editsCaptValIngMonto.setValidInteger();
		editsCaptValIngMonto.setSizeEdit(100);
		editsCaptValIngMonto.setMaxLength(12);
        imgButtonsCaptValAceptar = imgButtons.create('imgButtonsCaptValAceptar', 'Si', 'pulgararriba_1.png');
        imgButtonsCaptValCancelar = imgButtons.create('imgButtonsCaptValCancelar', 'No', 'pulgarabajo_1.png');
        imgButtonsCaptValAceptar.setDimension(40, 22);
        imgButtonsCaptValCancelar.setDimension(40, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsCaptValor_Init();
        this.createMWs();
    },
    
    setEvents: function() {
        editsCaptValIngMontoDolar.onKeyUp(this.windowName + ".setMontoBs()");
        editsCaptValIngMontoDolar.onBlur(this.windowName + ".setMontoBs()");
        editsCaptValIngMontoDolar.onEnter(this.windowName + ".capturar()");
        
        editsCaptValIngMonto.onKeyUp(this.windowName + ".setMontoD()");
        editsCaptValIngMonto.onBlur(this.windowName + ".setMontoD()");
        editsCaptValIngMonto.onEnter(this.windowName + ".capturar()");
    	imgButtonsCaptValAceptar.onClick(this.windowName + ".capturar()");
        imgButtonsCaptValCancelar.onClick("dialogsCaptValor.close();");
    },

    setMontoD: function() {
		if (editsCaptValIngMonto.getValue().trim() == "" || editsCaptValIngMonto.getValue() == "-")
			editsCaptValIngMontoDolar.clear();
		else
			editsCaptValIngMontoDolar.setValue(new Number(parseFloat(editsCaptValIngMonto.getValue(),10) / parseFloat(procPagos.getDivisa(),10)).toFixed(2));
    },
    
    setMontoBs: function() {
		if (editsCaptValIngMontoDolar.getValue().trim() == "" || editsCaptValIngMontoDolar.getValue() == "-")
			editsCaptValIngMonto.clear();
		else
			editsCaptValIngMonto.setValue(new Number(parseFloat(editsCaptValIngMontoDolar.getValue(),10) * parseFloat(procPagos.getDivisa(),10)).toFixed(2));
    },

    setIndex: function(ix) {
    	this.indexCmb = ix;
    },

    capturar: function() {
    	dialogsCaptValor.close();
		Pagos.facturar(
			editsPagoCi.getText(),
			gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0), 
			0.0, 
			parseFloat(editsCaptValIngMonto.getValue(),10),
			'', 
			'', 
			'', 
			0, 
			pcbPagoPeriodo.setModeReturnGetText(0).getText(), 
			0.0, 
			0.0, 
			'', 
			gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 3),
			editsPagoCi.hideId,
			gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 15),
			gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 12),
			gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 2),
			false);
		gridsPagoRecConcepto.clean();
		dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);
		editsPagoRecConcepto.clear();
		editsPagoRecConcepto.setFocus();
    }
};

