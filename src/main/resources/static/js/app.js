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
		.when('/addCourse',
		{
				templateUrl: 'ui/principal/addCourse.html',
				controller: 'AppCtrl'
		})
		.when('/addUser',{
			templateUrl: 'ui/principal/addUser.html',
			controller: 'AppCtrl'
		})
		.when ('/addSubject',{
			templateUrl: 'ui/principal/addSubject.html',
			controller: 'AppCtrl'
		});
		
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
	
	.controller('CourseListCtrl', function($scope) {
		$scope.todos = [
		  {	
			id : 1,
			face : 'img/course/curso.jpg',
			name: 'Sistemas de Informação',
			periods: '8'
		  },
		  {
			id : 2,
			face : 'img/course/curso.jpg',
			name: 'Engenharia de Software',
			periods: '8'
		  },
		  {
			id : 3,
			face : 'img/course/curso.jpg',
			name: 'C.C',
			periods: '8'
		  },
		];
	})
	
	.controller('SubjectListCtrl', function($scope) {
		$scope.todos = [
		  {	
			id : 1,
			face : 'img/subject/materia.jpg',
			name: 'Calculo'
			
		  },
		  {
			id : 2,
			face : 'img/subject/materia.jpg',
			name: 'ELP'
		  },
		  {
			id : 3,
			face : 'img/subject/materia.jpg',
			name: 'Estrutura de dados'
	
		  },
		];
	});
	