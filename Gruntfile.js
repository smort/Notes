module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		// grunt-express will serve the files from the folders listed in `bases`
		// on specified `port` and `hostname`
		express : {
			all : {
				options : {
					port : 9005,
					bases : ['.']
				}
			}
		},

		jshint : {
			// define the files to lint
			files : ['Gruntfile.js', 'scripts/src/**/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options : {
				bitwise : true,
				curly : true,
				eqeqeq : true,
				latedef : true,
				undef : true,
				unused : true,
				globals : {
					module : false,
					console : false,
					jQuery : false,
					angular : false,
				}
			},

		},

		copy : {
			release : {
				files : [{
					src : 'index.html',
					dest : 'release/'
				}, {
					src : 'partials/**',
					dest : 'release/'
				}]
			}
		},

		useminPrepare : {
			html : 'index.html',
			options : {
				dest : 'release/'
			}
		},

		usemin : {
			html : 'release/index.html'
		},

		watch : {
			options : {
				livereload : true
			},
			files : ['<%= jshint.files %>'],
			tasks : ['jshint']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-express');

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('server', ['express', 'express-keepalive']);
	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['jshint']);
	//grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('release', ['jshint', 'copy:release', 'useminPrepare', 'concat', 'uglify', 'usemin']);
};
