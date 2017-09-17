module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('grunt-tasks');

    /*
        Runs the development task, opens the server and watch any file change for recompiling.
    */
    grunt.registerTask('server', 'Opens an express server for development', function() {

        grunt.task.run([
            'development',
            'express:dev',
            'watch:dev'
        ]);
    });

    /*
        Build and compile the application
    */
    grunt.registerTask('development', 'Prepare the project for a development', function(){
       grunt.task.run([
           'clean:build',
           'less',
           'copy:all',
           'concat:all',
           'cssmin',
           'clean:css',
           'tags:all'
       ])
    });
};