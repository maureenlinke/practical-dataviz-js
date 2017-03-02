# practical-dataviz-js
NICAR session on how to make some essential visualization types just using jQuery, while going over best practices.

* Maureen Linke, Associated Press
   **[@maureenlinke](http://www.twitter.com/maureenlinke)**

jQuery is a simpler, less complex ways to select elements on the page:

**Selecting with jQuery**
* **$(".bar.horizontal")**

**Selecting with Javascript**
* **document.getElementsByClassName('bar.horizontal)**


##Resources

Highly recommend this book. Download the code for examples in the book to follow along.

* **[JavaScript and JQuery: Interactive Front-End Web Development] (https://www.amazon.com/gp/product/1118531647/ref=oh_aui_search_detailpage?ie=UTF8&psc=1)**

* **[Presentation ](https://drive.google.com/file/d/0BwAEH-Wzs83CdjdOenY0LVN5UU0/view?usp=sharing)**

##Downloads
* A text editor. I recommend:
  * **[Sublime](http://www.sublimetext.com/download)**
  
* Google Chrome for debugging
 * **[Chrome Browser](https://www.google.com/chrome/browser/)**
  
* Localhost or a local webserver installed
 * **[For Mac users] (http://brianflove.com/2013/10/23/os-x-mavericks-and-apache/)**
 * **[For PC users] (http://mirrors.gigenet.com/apache/httpd/binaries/win32/httpd-2.2.25-win32-x86-no_ssl.msi)**

 ###Mac instructions: 
1. Open the Terminal application (in Applications)
2. Type this command: sudo apachectl start
3. By default, your web files live in /Library/WebServer/Documents . So when you unzip the project files, move the folder into that directory.
 
 ###PC instructions:
1. Download file for installation wizard.
2. Follow the prompts to the server information screen. For each of the 2 fields enter 'localhost' and for the email add yourname@email.com. These fields do not matter, but must be filled out completely.
3. Radio button should be selected "for All Users, on Port 800", and "Typical" install type.
4. Next, save the Apache Files in your C:/Program files directory.
5.   Complete the installation process and donwload the GitHub repository, unzip and drop the files into the htcdocs folder of your C:/program files/apache
6.   Open your web browser and type in localhost/practical-dataviz-js/start/. 