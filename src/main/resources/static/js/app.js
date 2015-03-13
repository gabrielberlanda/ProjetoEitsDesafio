angular
	.module('StarterApp', ['ngMaterial', 'ngMessages','ngRoute'])
	.controller('AppCtrl', function($scope,$mdDialog) {

		$scope.menutitle = "Menu.";	
		
		
		
	})
	
	// Configuração das Rotas. 
	.config(function($routeProvider) {
		$routeProvider
		.when('/usuarios', 
			{
            templateUrl: 'ui/principal/userList.html',
            controller: 'UserListCtrl'
            })
		.when('/cursos',
		{
			templateUrl: 'ui/principal/courseList.html',
			controller: 'CourseListCtrl'
		})
		.when('/materias',
		{
			templateUrl: 'ui/principal/subjectList.html',
			controller: 'SubjectListCtrl'
		})
		
		//ADD USER
		
		.when('/addCourse',
		{
				templateUrl: 'ui/principal/formCourse.html',
				controller: 'CourseListCtrl'
		})
		.when('/addUser',{
			templateUrl: 'ui/principal/formUser.html',
			controller: 'UserListCtrl'
		})
		.when ('/addSubject',{
			templateUrl: 'ui/principal/formSubject.html',
			controller: 'SubjectListCtrl'
		})
		
		// UPDATE 
		
		.when('/updateSubject/:id',
		{
			templateUrl: 'ui/principal/formSubject.html',
			controller: 'SubjectListCtrl'
		})
		.when('/updateUser/:id',
		{
			templateUrl: 'ui/principal/formUser.html',
			controller: 'UserListCtrl'
		})
		.when('/updateCourse/:id',
		{
			templateUrl: 'ui/principal/formCourse.html',
			controller: 'CourseListCtrl'
		})
		
	})

	/*======================================================================================
	 * 
	 * CONTROLLER USUARIO 
	 * 
	 *======================================================================================
	 */
	.controller('UserListCtrl', function($scope,$http,$location,$routeParams,$mdDialog) {
		
		$scope.user = {};
		
		if( $routeParams.id ) {
			$http.post('/findUserById', $routeParams.id).success(function(data){
				$scope.user = data;
			});
		}
		
		$scope.list = function (){
			$http.get('/userList/').success(function(data)
			{
				$scope.todos = data;
				for (var i=0; i < $scope.todos.length; i++)
				{
					$scope.todos[i].face = 'img/user/perfil.jpg';
				}
			})
		};
		$scope.showFailAlert = function() {
		    $mdDialog.show(
		      $mdDialog.alert()
		      .title('Formulário inválido!')
		      .content( 'Por favor preencha os campos obrigatórios.')
		      .ariaLabel('Password notification')
		      .ok('fechar!')
		    );			
		}
		
		$scope.showConfirm = function(ev,user) {
			var confirm = $mdDialog.confirm()
				  .title('Você gostaria de deletar este item?')
				  .content('')
				  .ariaLabel('Lucky day')
				  .ok('Sim')
				  .cancel('Não')
				  .targetEvent(ev);
			$mdDialog.show(confirm).then(function() {
			    $scope.deleteUser(user);
				$scope.reloadPage();
			 }, function() {
			    $scope.alert = 'You decided to keep your debt.';				
			 });
			 $scope.list();
		};	
		$scope.reloadPage = function(){
			window.location.reload();
		};
		
		$scope.showDuplicateAlert = function() {
		    $mdDialog.show(
		      $mdDialog.alert()
		      .title('Email já cadastrado!')
		      .content( 'Por favor mude o campo email.')
		      .ariaLabel('Password notification')
		      .ok('fechar!')
		    );			
		}
		
		$scope.salvar = function(user){
			var form = angular.element('#formUser').scope()['formUser'];
			if (form.$invalid){
				console.log("Formulario inválido")
				$scope.showFailAlert();
				return;
			}
			 $http.post('/saveUser',user ).success(function(data)
			{
				$scope.user = data;
				$scope.list();
				$location.path("/usuarios")
			
			}).error(function(data){
				$scope.showDuplicateAlert();
			});
		}
		$scope.deleteUser = function(user) {
			$http.post('/deleteUser', user).success(function(data){
				$scope.user = data;
				$scope.list();
				
			});
		}
		
		$scope.list();	
			
			
	})
	
	/*======================================================================================
	 * 
	 * CONTROLLER SUBJECT 
	 * 
	 *======================================================================================
	 */
	.controller('SubjectListCtrl', function($scope,$http,$location,$routeParams,$mdDialog) {

		$scope.subject = {};
		
		if( $routeParams.id ) {
			$http.post('/findById', $routeParams.id).success(function(data){
				$scope.subject = data;
			}).error(function(data){
				console.log("id invalido.")
			});
		}
		
		$scope.showConfirm = function(ev,subject) {
			var confirm = $mdDialog.confirm()
				  .title('Você gostaria de deletar este item?')
				  .content('')
				  .ariaLabel('Lucky day')
				  .ok('Sim')
				  .cancel('Não')
				  .targetEvent(ev);
				$mdDialog.show(confirm).then(function() {
				  $scope.deleteSubject(subject);
					$scope.reloadPage();
				}, function() {
				  $scope.alert = 'You decided to keep your debt.';
				});
				 $scope.list();
			};	
			
			$scope.reloadPage = function(){
				window.location.reload();
			};
			
		$scope.showAlert = function() {
			    $mdDialog.show(
			      $mdDialog.alert()
			      .title('ERRO!')
			      .content('Esta matéria esta associada com um curso.')
			      .ariaLabel('Password notification')
			      .ok('fechar!')
		  );			
		 }
		
		$scope.showFailAlert = function() {
		    $mdDialog.show(
		      $mdDialog.alert()
		      .title('Formulário inválido!')
		      .content( 'Por favor preencha os campos obrigatórios.')
		      .ariaLabel('Password notification')
		      .ok('fechar!')
		    );			
		}
		
		$scope.showDuplicateAlert = function() {
		    $mdDialog.show(
		      $mdDialog.alert()
		      .title('Matéria já cadastrada!')
		      .content( 'Por favor mude o campo nome.')
		      .ariaLabel('Password notification')
		      .ok('fechar!')
		    );			
		}
		
		$scope.list = function(){
			$http.get('/subjectList/').success(function(data)
			{	
				if (data == null){
					console.log("Array de lista vazio")
					return;
				}
				$scope.todos = data;
				for (var i=0; i< $scope.todos.length; i++)
				{
					$scope.todos[i].face = 'img/subject/materia.jpg';
				}
			})
		}
		
		$scope.salvar = function(subject){
			var form = angular.element('#formSubject').scope()['formSubject'];
			if (form.$invalid){
				console.log("Formulario inválido")
				
				$scope.showFailAlert();
				return;
			}

			$http.post('/saveSubject',subject ).success(function(data)
			{
				$scope.subject = data;
				$location.path("/materias")
			}).error(function(data){
				$scope.showDuplicateAlert();
			});
			$scope.list();
		}
	
		$scope.deleteSubject = function(subject) {
			$http.post('/deleteSubject', subject).success(function(data){
				$scope.subject = data;
			}).error(function(data) {
				$scope.showAlert();
			});
		};
		$scope.list();	
	})
	
	/*======================================================================================
	 * 
	 * CONTROLLER COURSE  
	 * 
	 *======================================================================================
	 */
	.controller('CourseListCtrl', function($scope,$http,$location,$routeParams,$mdDialog) {
		$scope.course = {
						subjects : [] 
						};
		
		$scope.list = function() {
			$http.get('/courseList/').success(function(data){
				$scope.todos = data;
				for (var i=0; i< $scope.todos.length; i++)
				{
					$scope.todos[i].face = 'img/course/curso.jpg';
				}		
			})
		}
		
		if( $routeParams.id ) {
			$http.post('/findCourseById', $routeParams.id).success(function(data){
				$scope.course = data;
			});
		}
		
		$scope.showConfirm = function(ev,course) {
			var confirm = $mdDialog.confirm()
				  .title('Você gostaria de deletar este item?')
				  .content('')
				  .ariaLabel('Lucky day')
				  .ok('Sim')
				  .cancel('Não')
				  .targetEvent(ev);
				$mdDialog.show(confirm).then(function() {
				  $scope.deleteCourse(course);
					$scope.reloadPage();
				}, function() {
				  $scope.alert = 'You decided to keep your debt.';
				});
			};	
			
			$scope.reloadPage = function(){
				window.location.reload();
			};
			
			$scope.showFailAlert = function() {
			    $mdDialog.show(
			      $mdDialog.alert()
			      .title('Formulário inválido!')
			      .content( 'Por favor preencha os campos obrigatórios.')
			      .ariaLabel('Password notification')
			      .ok('fechar!')
			    );			
			}
			
			$scope.showFailSubjectsAlert = function() {
			    $mdDialog.show(
			      $mdDialog.alert()
			      .title('Matéria é obrigatório.')
			      .content( 'Por favor selecione uma matéria.')
			      .ariaLabel('Password notification')
			      .ok('fechar!')
			    );			
			}
			
			$scope.showDuplicateAlert = function() {
			    $mdDialog.show(
			      $mdDialog.alert()
			      .title('Curso já cadastrado!')
			      .content( 'Por favor mude o campo nome.')
			      .ariaLabel('Password notification')
			      .ok('fechar!')
			    );			
			}
		
		$http.get('/subjectList/').success(function(data)
		{
			$scope.subjects = data;
		})
		
		$scope.salvar = function(course){
			var form = angular.element('#formCourse').scope()['formCourse'];
			if (form.$invalid){
				console.log("Formulario inválido")
				$scope.showFailAlert();
				return;
			}
			if ($scope.course.subjects.length === 0) {
				console.log("Fomulario inválido")
				$scope.showFailSubjectsAlert();
				return;
			}
			 $http.post('/saveCourse',course ).success(function(data)
			{
				$scope.course = data;
				$scope.list();
				$location.path("/cursos")
			
			}).error(function(data){
				$scope.showDuplicateAlert();
				return;
			});
		}
		$scope.deleteCourse = function(course) {
			course.subjects = [];
			$http.post('/deleteCourse', course).success(function(data){
				$scope.course = data;
				$scope.list();
			});
			$scope.list();
		}
		$scope.list();
		$scope.addSubjects = function (course, subject) {
			var found = false;
			for ( var k =0 ; k <  course.subjects.length; k++)
			{
				if (course.subjects[k] == subject){
					found = true;
				}
			}
			if (!found)
			{
				course.subjects.push(subject);
			}
		}	
		$scope.removeSubjects = function (course, subject)
		{
			course.subjects.splice(course.subjects.indexOf(subject),1);
		}
		$scope.list();
	})	
	
	