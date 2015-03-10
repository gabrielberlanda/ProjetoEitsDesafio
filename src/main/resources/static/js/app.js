angular
	.module('StarterApp', ['ngMaterial', 'ngMessages','ngRoute'])
	.controller('AppCtrl', function($scope,$mdDialog) {

		$scope.menutitle = "Menu.";	
		$scope.showConfirm = function(ev) {
		var confirm = $mdDialog.confirm()
			  .title('Você gostaria de deletar este item?')
			  .content('')
			  .ariaLabel('Lucky day')
			  .ok('Sim')
			  .cancel('Não')
			  .targetEvent(ev);
			$mdDialog.show(confirm).then(function() {
			  $scope.alert = 'You decided to get rid of your debt.';
			}, function() {
			  $scope.alert = 'You decided to keep your debt.';
			});
		};
		
		
		
	})
	
	// Configuração das Rotas. 
	.config(function($routeProvider) {
		$routeProvider
		.when('/usuarios', 
			{
            templateUrl: 'ui/principal/userList.html',
            controller: 'AppCtrl'
            })
		.when('/cursos',
		{
			templateUrl: 'ui/principal/courseList.html',
			controller: 'AppCtrl'
		})
		.when('/materias',
		{
			templateUrl: 'ui/principal/subjectList.html',
			controller: 'AppCtrl'
		})
		
		//ADD USER
		
		.when('/addCourse',
		{
				templateUrl: 'ui/principal/addCourse.html',
				controller: 'CourseListCtrl'
		})
		.when('/addUser',{
			templateUrl: 'ui/principal/addUser.html',
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
		.when('/addUser/:id',
		{
			templateUrl: 'ui/principal/addUser.html',
			controller: 'UserListCtrl'
		})
		.when('/addCourse/:id',
		{
			templateUrl: 'ui/principal/addCourse.html',
			controller: 'CourseListCtrl'
		})
		
	})
	
	//Controller de Lista de usuario.
	.controller('UserListCtrl', function($scope,$http) {
		$http.get('/userList/').success(function(data)
		{
			$scope.todos = data;
			for (var i=0; i < $scope.todos.length; i++)
			{
				$scope.todos[i].face = 'img/user/perfil.jpg';
			}
		})
	
	})
	
	.controller('CourseListCtrl', function($scope,$http) {
		$http.get('/courseList/').success(function(data){
			$scope.todos = data;
			for (var i=0; i< $scope.todos.length; i++)
			{
				$scope.todos[i].face = 'img/course/curso.jpg';
			}		
		})
		$http.get('/subjectList/').success(function(data)
		{
			$scope.subjects = data;
		})
		
	})
	/*======================================================================================
	 * 
	 * CONTROLLER SUBJECT :D
	 * 
	 */
	.controller('SubjectListCtrl', function($scope,$http,$location,$routeParams,$mdDialog) {

		$scope.subject = {};
		
		if( $routeParams.id ) {
			$http.post('/findById', $routeParams.id).success(function(data){
				$scope.subject = data;
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
				}, function() {
				  $scope.alert = 'You decided to keep your debt.';
				});
			};		
		
		$scope.list = function(){
			$http.get('/subjectList/').success(function(data)
			{
				$scope.todos = data;
				for (var i=0; i< $scope.todos.length; i++)
				{
					$scope.todos[i].face = 'img/subject/materia.jpg';
				}
			})
			}
		
		$scope.salvar = function(subject){

			$http.post('/saveSubject',subject ).success(function(data)
			{
				$scope.subject = data;
				$scope.list();
			});
		}
	
		$scope.deleteSubject = function(subject) {
			$http.post('/deleteSubject', subject).success(function(data){
				$scope.subject = data;
				$scope.list();
			});
		}
		$scope.list();	
	})
	
	
	