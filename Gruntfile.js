module.exports = function(grunt) {

    grunt.initConfig({

        prettify: {
            options: {
                "indent": 4,
                "indent_char": " ",
                "indent_scripts": "normal",
                "wrap_line_length": 0,
                "brace_style": "collapse",
                "preserve_newlines": true,
                "max_preserve_newlines": 1,
                "unformatted": [
                    "a",
                    "code",
                    "pre"
                ]
            },
            all: {
                expand: true,
                cwd: 'app/emscalculator/',
                ext: '.html',
                src: ['*.html'],
                dest: 'app/emscalculator/'
            },
        },

        'jsbeautifier': {
            files: ['Gruntfile.js', 'app/**/*.js'],
            options: {
                indentSize: 5
            }
        },
        watch: {
            files: ['Gruntfile.js', 'app/**/*.js'],
            tasks: ['jsbeautifier', 'prettify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-prettify');

    grunt.registerTask('default', ['watch']);

};
