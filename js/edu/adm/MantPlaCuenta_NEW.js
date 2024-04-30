var dialogsMantPlaCuenta = new Object();
var editsMantPlaNomCuenta = new Object();
var editsMantPlaGruRelacionado = new Object();
var gridsMantPlaCuenta = new Object();
var imgButtonsMantPlaCueAgregar = new Object();
var imgButtonsMantPlaCueModificar = new Object();
var imgButtonsMantPlaCueEliminar = new Object();
var imgButtonsMantPlaCueLimpiar = new Object();
var imgButtonsMantPlaCueSalir = new Object();
var mwMantPlaCuenta = new Object();// minWindow

var MantPlaCuenta = {
	windowName : 'MantPlaCuenta',
	isCreate : false,
	idProfesion : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPlaCuenta.isByClean())
 			this.limpiar();			
		dialogsMantPlaCuenta.show();
	},
	
	hide : function() {
		dialogsMantPlaCuenta.hide();
	},
	
	createMWs : function() {
        	mwMantPlaCuenta = desktop.addMinWindow('M.Plan/Cuenta', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPlaCuenta.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPlaCuenta_Init : function(){
        dialogsMantPlaCuenta.setMinimizeXY(0,0);
        dialogsMantPlaCuenta.setCenterScreen();
        dialogsMantPlaCuenta.addSpace(0,0,20);
        dialogsMantPlaCuenta.addLn(1,1,1);
		dialogsMantPlaCuenta.setHeightCell(1,1,10);
        dialogsMantPlaCuenta.addObjToDialog(editsMantPlaNomCuenta,2,1,24);
        editsMantPlaNomCuenta.setSizeEdit(240);
	    editsMantPlaNomCuenta.setMaxLength(50);

		dialogsMantPlaCuenta.addObjToDialog(editsMantPlaGruRelacionado,3,1,24);
        editsMantPlaGruRelacionado.setSizeEdit(240);
	    editsMantPlaGruRelacionado.setMaxLength(50);


        dialogsMantPlaCuenta.addLn(4,1,1);
		dialogsMantPlaCuenta.setHeightCell(4,1,10);
        dialogsMantPlaCuenta.addObjToDialog(gridsMantPlaCuenta.getObject(),5,1);
        dialogsMantPlaCuenta.addLn(6,1,1);
		dialogsMantPlaCuenta.setHeightCell(6,1,12);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantPlaCueAgregar,7,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantPlaCueModificar,7,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantPlaCueEliminar,7,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantPlaCueLimpiar,7,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantPlaCueSalir,7,1);        
        imgButtonsMantPlaCueAgregar.setDimension(90,22);
        imgButtonsMantPlaCueModificar.setDimension(90,22);
        imgButtonsMantPlaCueEliminar.setDimension(90,22);
        imgButtonsMantPlaCueLimpiar.setDimension(90,22);
        imgButtonsMantPlaCueSalir.setDimension(90,22);
        dialogsMantPlaCuenta.adjAllMarginObj(7,1,18);
        dialogsMantPlaCuenta.leftMarginObj(7,1,0,30); 
	},

	gridsMantPlaCuenta_Init : function() {
        gridsMantPlaCuenta.setFixColRow(false,true);
        gridsMantPlaCuenta.addTitleVectorX(['Nombre de Cuenta','Grupo Relacionado']);
        gridsMantPlaCuenta.showData();
        gridsMantPlaCuenta.setReadOnlyToAll();
        gridsMantPlaCuenta.setSizeCol(1,294);
        gridsMantPlaCuenta.setSizeCol(2,294);
        //gridsMantPlaCuenta.hideCol(1);

	},

	create : function() {
		dialogsMantPlaCuenta = dialogs.create('dialogsMantPlaCuenta',0,0,629,335,'MANTENIMIENTO PLAN DE CUENTA');
		editsMantPlaNomCuenta = edits.create('editsMantPlaNomCuenta','MantPlaCuentaDescripcion','Nombre Cuenta:',1,115,'normal');
		editsMantPlaNomCuenta.setValidEmpty();
		editsMantPlaGruRelacionado = edits.create('editsMantPlaGruRelacionado','editsMantPlaGruRelacionado','Grupo Relacionado:',1,115,'normal');
		editsMantPlaGruRelacionado.setValidEmpty();		
		gridsMantPlaCuenta = grids.create('gridsMantPlaCuenta',10,2);
		imgButtonsMantPlaCueAgregar = imgButtons.create('imgButtonsMantPlaCueAgregar','Agregar','ok.png');
		imgButtonsMantPlaCueModificar = imgButtons.create('imgButtonsMantPlaCueModificar','Modificar','icono_modificar.png');
		imgButtonsMantPlaCueModificar.setDisable();
		imgButtonsMantPlaCueEliminar = imgButtons.create('imgButtonsMantPlaCueEliminar','Eliminar','eliminar.png');
		imgButtonsMantPlaCueEliminar.setDisable();
		imgButtonsMantPlaCueLimpiar = imgButtons.create('imgButtonsMantPlaCueLimpiar','Limpiar','limpiar.png');
		imgButtonsMantPlaCueSalir = imgButtons.create('imgButtonsMantPlaCueSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantPlaCuenta_Init();
		this.gridsMantPlaCuenta_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idProfesion = 0;
  		editsMantPlaNomCuenta.setValue("");
		editsMantPlaGruRelacionado.setValue("");
  		gridsMantPlaCuenta.clean();
  		dialogsMantPlaCuenta.setMsg("");
		imgButtonsMantPlaCueAgregar.setEnable();
		imgButtonsMantPlaCueModificar.setDisable();
		imgButtonsMantPlaCueEliminar.setDisable();	
		Tool.getGridData('MantObject', 'getParentesco', dialogsMantPlaCuenta, gridsMantPlaCuenta, false);
  	},
  	
  	setData : function() {
		if (gridsMantPlaCuenta.getDataCell(1) != "") {
			this.idProfesion = gridsMantPlaCuenta.getDataCell(1);
			editsMantPlaNomCuenta.setValue(gridsMantPlaCuenta.getDataCell(2));
			imgButtonsMantPlaCueAgregar.setDisable();
			imgButtonsMantPlaCueModificar.setEnable();
			imgButtonsMantPlaCueEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantPlaCuenta.onClickCells(this.windowName+".setData()")	
  		imgButtonsMantPlaCueAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantPlaCueModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantPlaCueEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantPlaCueLimpiar.onClick('MantPlaCuenta.limpiar()');
  		imgButtonsMantPlaCueSalir.onClick('dialogsMantPlaCuenta.close()');	  	 	
    },
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantPlaNomCuenta.valid(dialogsMantPlaCuenta)) {
			if (methodName != 'eliminar') 
				rlx.add('reg',editsMantPlaNomCuenta);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idProfesion);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		}
	}
}