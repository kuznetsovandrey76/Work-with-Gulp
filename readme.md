1. **В папке проекта:**

	npm install gulp -D  
	touch gulpfile.js  
	npm init  
	mkdir app/{css,js} dist -p  
	touch app/css/style.css app/js/main.js app/index.html  

	npm install --save-dev gulp-clean-css  
	npm install --save-dev gulp-livereload  (если это необходимо)

2. Содержимое `gulpfile.js` можно скопировать

3. **Для работы запускаю:** 

	dist/index.html  
	расширение livereload  
	gulp в npm  

4. На сервер можно заливать содержимое `dist`
