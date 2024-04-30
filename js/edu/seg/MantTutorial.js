var dialogsMantTutorial = new Object();
var editsMantTutorialPantalla = new Object();
var editsMantTutorialFile = new Object();
var gridsMantTutorial = new Object();
var imgButtonsMantTutorialGuardar = new Object();
var imgButtonsMantTutorialLimpiar = new Object();
var imgButtonsMantTutorialSalir = new Object();
var mwMantTutorial  = new Object();// minWindow

var MantTutorial = {
	windowName : 'MantTutorial',
	isCreate : false, 
	hideIdTutorial: -1,
	
	show : function(){
		if (!this.isCreate){
			this.init();
			this.isCreate = true;
		}
		this.limpiar();			
		dialogsMantTutorial.show();
	},
	
	hide : function(){
		dialogsMantTutorial.hide();
	},
	
	createMWs : function(){
        	mwMantTutorial = desktop.addMinWindow('Tutorial', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantTutorial.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantTutorial_Init : function(){
        dialogsMantTutorial.setMinimizeXY(0,0);
        dialogsMantTutorial.setCenterScreen();
        dialogsMantTutorial.addSpace(0,0,20);
        dialogsMantTutorial.addLn(1,1,1);
		dialogsMantTutorial.setHeightCell(1,1,10);  
		dialogsMantTutorial.addObjToDialog(editsMantTutorialPantalla,2,1,24);
        dialogsMantTutorial.addObjToDialog(editsMantTutorialFile,3,1,24);
		dialogsMantTutorial.addLn(4,1,1);
		dialogsMantTutorial.setHeightCell(4,1,10); 

        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialGuardar,5,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialEliminar,5,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialLimpiar,5,1);
        dialogsMantTutorial.addObjToDialog(imgButtonsMantTutorialSalir,5,1);
        dialogsMantTutorial.adjAllMarginObj(5,1,20);
        dialogsMantTutorial.leftMarginObj(5,1,0,159);

        dialogsMantTutorial.addLn(6,1,1);
		dialogsMantTutorial.setHeightCell(6,1,12);
		dialogsMantTutorial.addObjToDialog(gridsMantTutorial.getObject(),7,1);

	},
  
    gridsMantTutorial_Init : function(){
        gridsMantTutorial.setFixColRow(false,true);
        gridsMantTutorial.addTitleVectorX(['Nombre de la Pantalla','Nombre del Archivo','id']);
        gridsMantTutorial.showData();        
        gridsMantTutorial.setSizeCol(1,385);
		gridsMantTutorial.setSizeCol(2,385);
        gridsMantTutorial.setSizeCol(3,0);
		gridsMantTutorial.hideCol(3);
	},
 
	create : function(){
		dialogsMantTutorial = dialogs.create('dialogsMantTutorial',0,0,814,548,'TUTORIAL');
		dialogsMantTutorial.setAdjY(20);
		editsMantTutorialPantalla = edits.create('editsMantTutorialPantalla','MantTutorial_Codigo','Nombre de la Pantalla:',1,138,'normal');
		editsMantTutorialPantalla.setValidEmpty();
        editsMantTutorialPantalla.setSizeEdit(634);
	    editsMantTutorialPantalla.setMaxLength(100);
		editsMantTutorialFile = edits.create('editsMantTutorialFile','editsMantTutorialFile','Nombre del Archivo:',1,138,'normal');
		editsMantTutorialFile.setValidEmpty(); 
        editsMantTutorialFile.setSizeEdit(634);  
	    editsMantTutorialFile.setMaxLength(100);
		gridsMantTutorial = grids.create('gridsMantTutorial',20,3);
		imgButtonsMantTutorialGuardar = imgButtons.create('imgButtonsMantTutorialGuardar','Copiar Archivo','adjuntar.png');
		imgButtonsMantTutorialEliminar = imgButtons.create('imgButtonsMantTutorialEliminar','Eliminar','eliminar.png');
		imgButtonsMantTutorialLimpiar = imgButtons.create('imgButtonsMantTutorialLimpiar','Limpiar','limpiar.png');
		imgButtonsMantTutorialSalir = imgButtons.create('imgButtonsMantTutorialSalir','Salir','salir.png');
        imgButtonsMantTutorialGuardar.setDimension(120,22);
        imgButtonsMantTutorialEliminar.setDimension(90,22);
        imgButtonsMantTutorialLimpiar.setDimension(90,22);
        imgButtonsMantTutorialSalir.setDimension(90,22);
	},
  
	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantTutorial_Init();
		this.gridsMantTutorial_Init();
		this.createMWs(); 
	},

  	limpiar : function(){
		AdjuArchivos.clearFileName();
  		this.hideIdTutorial = -1;
  		dialogsMantTutorial.setMsg("");
  		editsMantTutorialPantalla.clear();
		editsMantTutorialFile.clear();
		gridsMantTutorial.clean();
		imgButtonsMantTutorialEliminar.setDisable();
		Tool.getGridData('SecurityObject', 'getTutorial', dialogsMantTutorial, gridsMantTutorial, false);	 		    		
    },
    
  	setData : function(){
		if (gridsMantTutorial.getDataCell(1) != ""){
	        editsMantTutorialPantalla.setValue(gridsMantTutorial.getDataCell(1));
	        editsMantTutorialFile.setValue(gridsMantTutorial.getDataCell(2));
	        this.hideIdTutorial = gridsMantTutorial.getDataCell(3);
			imgButtonsMantTutorialEliminar.setEnable();
        }
	},
	
	copyDocEdit : function() {
		editsMantTutorialFile.readOnly(true);
		editsMantTutorialFile.setValue(AdjuArchivos.getFileName());
		this.coreUpdate('guardar');
	},

  	copyDoc : function() {
		if (editsMantTutorialPantalla.valid(dialogsMantTutorial))
			if (this.hideIdTutorial == -1) {
				AdjuArchivos.sizeFile(10024 * 10024 * 20);//20Mb
				AdjuArchivos.filter('');
				AdjuArchivos.process(34);
				AdjuArchivos.setExtFnc(this.windowName + ".copyDocEdit()");
				AdjuArchivos.setCountBtn(1);
				AdjuArchivos.show();
			}
			else
				Alert.show('DEBE ELIMINAR LA BIOGRAFIA PARA CAMBIAR LA FUENTE.', 'SISTEMA', Alert.TYPE_INFO);
	},
	
	setEvents : function(){
		gridsMantTutorial.onClickCells(this.windowName+".setData()");
		gridsMantTutorial.onDblClickCells("new OpenWin().getFile('help/tutorial/'+ editsMantTutorialFile.getValue())");
  		imgButtonsMantTutorialGuardar.onClick(this.windowName + ".copyDoc()");
  		imgButtonsMantTutorialEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantTutorialLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsMantTutorialSalir.onClick('dialogsMantTutorial.close()');	  	 	
    },
    
	coreUpdate : function(methodName){
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantTutorialPantalla.valid(dialogsMantTutorial))
			if (editsMantTutorialFile.valid(dialogsMantTutorial)) { 					
            	if (methodName == 'guardar') {
                    rlx.add('reg', editsMantTutorialPantalla);
                    rlx.add('reg', editsMantTutorialFile);
                    methodName = 'modificar';
            	} 

				if (methodName == 'eliminar' || this.hideIdTutorial > 0) 
                    rlx.addInt('reg', this.hideIdTutorial);
				else
                    methodName = 'agregar';

    			Tool.cnnSrv('SecurityObject', methodName + 'Tutorial', this.windowName + '.limpiar()', rlx);
			} 
	}
};
	