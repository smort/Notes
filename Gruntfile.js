module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		concat : {
			options : {
				// define a string to put between each file in the concatenated output
				separator : ';'
			},
			dist : {
				// the files to concatenate
				src : ['scripts/**/*.js'],
				// the location of the resulting JS file
				dest : 'dist/<%= pkg.name %>.js'
			}
		},

		uglify : {
			options : {
				// the banner is inserted at the top of the output
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist : {
				files : {
					'dist/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
				}
			}
		},

		jshint : {
			// define the files to lint
			files : ['scripts/src/**/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options : {
				bitwise: true,
				curly: true,
				eqeqeq: true,
				latedef: true,
				undef: true,
				unused: true,
			},
			globals: {
				module: true,
				console: true,
				jQuery: true,
				angular: true
			}
		},

		watch : {
			files : ['<%= jshint.files %>'],
			tasks : ['jshint']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-preprocess');

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['jshint']);
	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
};
