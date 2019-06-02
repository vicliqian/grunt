module.exports = function (grunt) {
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        pkg:grunt.file.readJSON('PACKAGE.JSON'),
        uglify: {
            // 生成的压缩文件第一行加一句说明，其中使用了目标文件名空过pkg 的name 和version
            options:{
                stripBanners: true,
                banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            build:{
                src:'src/index.js',
                dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
        jshint:{
            build: ['Gruntfile.js','src/*.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        },
        watch: {
            build: {
                files: ['src/*.js','src/*.css'],
                tasks:['jshint','uglify'],
                options: {spawn: false}
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['jshint','uglify','watch']);

};