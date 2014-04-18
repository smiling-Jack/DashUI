/**
 *  DashUI
 *  https://github.com/hobbyquaker/dashui/
 *
 *  Copyright (c) 2013-2014 Bluefox https://github.com/GermanBluefox
 *  MIT License (MIT)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 *  documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 *  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 *  the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 *  THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */
"use strict";

// Languages
dui = $.extend(true, dui, {
    translate: function (text, lang) {
    	lang = lang || dui.language || 'en';
        if (!this.words) {
            this.words = {
                'Views'            : {'en': 'Views',         'de': 'Views',                'ru': 'Страницы'},
                'Widgets'          : {'en': 'Widgets',       'de': 'Widgets',              'ru': 'Элементы'},
                'CSS Inspector'    : {'en': 'CSS Inspector', 'de': 'CSS Inspektor',        'ru': 'CSS Ин�?пектор'},
                'Misc'             : {'en': 'Misc',          'de': 'Versch.',              'ru': 'Разное'},
                'Info'             : {'en': 'Info',          'de': 'Info',                 'ru': 'Инфо'},
                'default_filter_key':{'en': 'Default filter:','de': 'Voreingestellter Filter:', 'ru': 'Фильтр по умолчанию:'},
                'class'            : {'en': 'CSS Class',     'de': 'CSS Klasse:',          'ru': 'CSS Кла�?�?'},
                'Snapping'         : {'en': 'Snapping',      'de': 'Ausrichten',           'ru': 'Опорные точки'},
                'disabled'         : {'en': 'Disabled',      'de': 'Inaktiv',              'ru': 'не активно'},
                'elements'         : {'en': 'Elements',      'de': 'Elemente',             'ru': '�?лементы'},
                'grid'             : {'en': 'Grid',          'de': 'Raster',               'ru': 'таблица'},
                'grid size'        : {'en': 'Grid size:',    'de': 'Rastermaß:',           'ru': 'Шаг:'},
                'theme'            : {'en': 'Theme:',        'de': 'Thema:',               'ru': 'Тема:'},
                'Screensize'       : {'en': 'Screensize:',   'de': 'Bildschirmgröße',      'ru': 'Размер �?крана'},
                'Width'            : {'en': 'Width (px):',   'de': 'Breite (px):',         'ru': 'Ширина (пик�?.):'},
                'Height'           : {'en': 'Height (px):',  'de': 'Höhe (px):',           'ru': 'Вы�?ота (пик�?.):'},
                'comment'          : {'en' : 'Comment:',     'de': 'Kommentar:',           'ru': 'Комментарий'},
                'Room:'            : {'en' : 'Room:',        'de': 'Raum:',                'ru': 'Комната:'},
                'Function:'        : {'en' : 'Function:',    'de': 'Gewerk:',              'ru': 'Функционально�?ть:'},
                'Widget:'          : {'en' : 'Widget:',      'de': 'Widget:',              'ru': 'Элемент:'},
                'New View'         : {'en' : 'New View:',    'de': 'Neue View',            'ru': '�?ова�? �?траница'},
                'Current View'     : {'en' : 'Current View', 'de': 'Aktuelle View',        'ru': 'Текуща�? �?траница'},
                'View Attributes'  : {'en' : 'View Attributes','de': 'View-Eigenschaften', 'ru': 'Свой�?тва �?траницы'},
                'External Commands': {'en' : 'External Commands', 'de': 'Externe Befehle', 'ru': 'Внешние комманды'},
                'View:'            : {'en' : 'View:',        'de': 'View:',                'ru': 'Страница:'},
                'Wizard'           : {'en' : 'Wizard',       'de': 'Wizard',               'ru': 'Помошник'},
                'wizard_run'       : {'en' : 'Run',          'de': 'Ausführen',            'ru': 'Выполнить'},
                'add_view'         : {'en' : 'Add',          'de': 'Hinzufügen',           'ru': 'Добавить'},
                'dup_view'         : {'en' : 'Duplicate',    'de': 'Duplizieren',          'ru': 'Копировать'},
                'del_view'         : {'en' : 'Delete',       'de': 'Löschen',              'ru': 'Удалить'},
                'rename_view'      : {'en' : 'Rename',       'de': 'Umbenennen',           'ru': 'Перемменовать'}, 	
                'create_instance'  : {'en' : 'Create instance', 'de': 'Instanz erzeugen',  'ru': 'Создать идентификатор броузера'}, 
                'remove_instance'  : {'en' : 'Remove instance','de': 'Instanz löschen',    'ru': 'Удалить идентификатор броузера'}, 
                'add_widget'       : {'en' : 'Add widget',   'de': 'Einfügen',             'ru': 'Добавить'},
                'del_widget'       : {'en' : 'Delete widget','de': 'Löschen',              'ru': 'Удалить'},
                'dup_widget'       : {'en' : 'Copy to:',     'de': 'Kopieren nach:',       'ru': 'Скопировать в:'},
                'widget_doc'       : {'en' : 'Widget help',  'de': 'Widgethilfe',          'ru': 'Помощь'},
                'Add Widget:'      : {'en' : 'Add Widget:',  'de': 'Widget einf&uuml;gen:','ru': 'Добавить �?лемент:'},
                'Inspecting Widget:':{'en' : 'Inspecting Widget:', 'de': 'Widget inspizieren:','ru': 'Редактировать �?лемет:'},
                'Widget Attributes:':{'en' : 'Widget Attributes:', 'de': 'Widget-Eigenschaften:','ru': 'Свой�?тва �?лемета:'},
                'filter_key'       : {'en' : 'Filter key:',  'de': 'Filterwort:',          'ru': 'Фильтр:'},
                'Show in views:'   : {'en' : 'Show in views:','de': 'Zeige in Views:',     'ru': 'Показать на �?траницах:'},
                'Background class' : {'en' : 'Background class:','de': 'Hintergrundklasse:','ru': 'CSS кла�?�? фона:'},
                'Webseite'         : {'en' : 'Web link',     'de': 'Webseite',            'ru': 'Веб �?айт'},
                'none selected'    : {'en' : 'none selected','de': 'nichst selektiert',    'ru': 'ничего не выбрано'},
                'Unterstützung'    : {'en' : 'Hilfe',        'de': 'Unterstützung',        'ru': 'Помощь'},
                'User name'        : {'en' : 'User name',    'de': 'Anwendername',         'ru': 'Imja polzovatelja'},
                'Password'         : {'en' : 'Password',     'de': 'Kennwort',             'ru': 'Parol'},
                'Sign in'          : {'en' : 'Sign in',      'de': 'Anmelden',             'ru': 'Voiti'},
                'Check all'        : {'en' : 'Check all',    'de': 'Alle selektieren',     'ru': 'Выбрать в�?е'},
                'Uncheck all'      : {'en' : 'Uncheck all',  'de': 'Alle unselektieren',   'ru': 'Убрать в�?е'},
                'Select options'   : {'en' : 'Select options','de': 'Selekteingensch.',    'ru': 'Свой�?тва выбора'},
                "left"              :{"en" : "left",                "de": "links",                      "ru": "left"},
                "right"             : {"en" : "right",              "de": "rechts",                     "ru": "right"},
                "up"                : {"en" : "up",                 "de": "oben",                       "ru": "up"},
                "down"              : {"en" : "down",               "de": "unten",                      "ru": "down"},
                'Änderungs-Historie': {'en' : 'Change log',  'de': 'Änderungs-Historie:',  'ru': 'Спи�?ок изменений'},
                'No connection to Server'      : {'en' : 'No connection to Server',      'de': 'Keine Verbindung zu Server',  'ru': '�?ет �?оединени�? �? �?ервером'},
                'Loading Widget-Sets... <span id="widgetset_counter"></span>' : {
                    'en': 'Loading Widget-Sets... <span id="widgetset_counter"></span>',
                    'de': 'Lade Widget-Sätze... <span id="widgetset_counter"></span>',
                    'ru': 'Загрузка наборов �?лементов... <span id="widgetset_counter"></span>'},
                ' done.<br/>'                  : {'en' : ' done.<br/>',                  'de': ' - erledigt.<br/>',           'ru': '. Закончено.<br/>'},
                '<br/>Loading Views...<br/>'   : {'en' : '<br/>Loading Views...<br/>',   'de': '<br/>Lade Views...<br/>',     'ru': '<br/>Загрузка пользователь�?ких �?траниц...<br/>'},
                'Connecting to Server...<br/>' : {'en' : 'Connecting to Server...<br/>', 'de': 'Verbinde mit Server...<br/>', 'ru': 'Соединение �? �?ервером...<br/>'},
                'Loading data objects...'      : {'en' : 'Loading data...',              'de': 'Lade Daten...',               'ru': 'Загрузка данных...'},
                'Loading data values...'       : {'en' : 'Loading values...<br>',        'de': 'Lade Werte...<br>',           'ru': 'Загрузка значений...<br>'},
                'Instance ID'      : {'en' : 'Instance ID ',      'de': 'Instanz ID ',            'ru': 'Instance ID '},
                'Single view'      : {'en' : 'Single view',  'de': 'Nur in aktueller View','ru': 'Только на текущей �?транице'},
//                'Single mode'      : {'en' : 'Only in actual view',  'de': 'Nur in aktueller View', 'ru': 'Только на текущей �?транице'},
                'MIT Lizenz (MIT)' : {'en' : 'MIT License (MIT)','de': 'MIT Lizenz (MIT)', 'ru': 'Лицензи�? MIT (MIT)'},
                'license1'         : {
                    'en': 'Users of this software do so at their own risk. The authors of this software cannot be held liable for possible complications that may arise.',
                    'de': 'Die Nutzung dieser Software erfolgt auf eigenes Risiko. Der Author dieser Software kann für eventuell auftretende Folgeschäden nicht haftbar gemacht werden!',
                    'ru': 'Пользователь и�?пользует �?то программное обе�?печение на �?вой �?трах и ри�?к. Об�?зательным у�?ловием и�?пользовани�? Вами �?того программного обе�?печени�? �?вл�?ет�?�? �?огла�?ие Вами �? отказом авторов программного обе�?печени�? от какой-либо ответ�?твенно�?ти за любые потери, упущенную выгоду, затраты или убытки в какой-либо форме в �?в�?зи �? и�?пользованием Вами или третьими лицами �?того программного обе�?печени�?. И�?пользу�? �?то программное обе�?печене, Вы �?оглашаете�?ь �? такой ди�?кламацией (отказом от ответ�?твенно�?ти). В любом другом �?лучае Вы должны немедленно удалить �?то программное обе�?печение.'},
                'license2'      : {
                    'en': 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
                    'de': 'Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu benutzen, inklusive und ohne Ausnahme dem Recht, sie zu verwenden, kopieren, ändern, fusionieren, verlegen, verbreiten, unterlizenzieren und/oder zu verkaufen, und Personen, die diese Software erhalten, diese Rechte zu geben, unter den folgenden Bedingungen:',
                    'ru': 'Данна�? лицензи�? разрешает лицам, получившим копию данного программного обе�?печени�? и �?опут�?твующей документации (в дальнейшем именуемыми «Программное Обе�?печение»), безвозмездно и�?пользовать Программное Обе�?печение без ограничений, включа�? неограниченное право на и�?пользование, копирование, изменение, добавление, публикацию, ра�?про�?транение, �?ублицензирование и/или продажу копий Программного Обе�?печени�?, также как и лицам, которым предо�?тавл�?ет�?�? данное Программное Обе�?печение, при �?облюдении �?ледующих у�?ловий:'},
                'license3'      : {
                    'en': 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
                    'de': 'Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.',
                    'ru': 'Указанное выше уведомление об автор�?ком праве и данные у�?лови�? должны быть включены во в�?е копии или значимые ча�?ти данного Программного Обе�?печени�?.'},
                'license4'      : {
                    'en': 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
                    'de': 'DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.',
                    'ru': 'Д�?�?�?ОЕ ПРОГР�?ММ�?ОЕ ОБЕСПЕЧЕ�?ИЕ ПРЕДОСТ�?ВЛЯЕТСЯ «К�?К ЕСТЬ», БЕЗ К�?КИХ-ЛИБО Г�?Р�?�?ТИЙ, ЯВ�?О ВЫР�?ЖЕ�?�?ЫХ ИЛИ ПОДР�?ЗУМЕВ�?ЕМЫХ, ВКЛЮЧ�?Я, �?О �?Е ОГР�?�?ИЧИВ�?ЯСЬ Г�?Р�?�?ТИЯМИ ТОВ�?Р�?ОЙ ПРИГОД�?ОСТИ, СООТВЕТСТВИЯ ПО ЕГО КО�?КРЕТ�?ОМУ �?�?З�?�?ЧЕ�?ИЮ И ОТСУТСТВИЯ �?�?РУШЕ�?ИЙ ПР�?В. �?И В К�?КОМ СЛУЧ�?Е �?ВТОРЫ ИЛИ ПР�?ВООБЛ�?Д�?ТЕЛИ �?Е �?ЕСУТ ОТВЕТСТВЕ�?�?ОСТИ ПО ИСК�?М О ВОЗМЕЩЕ�?ИИ УЩЕРБ�?, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВ�?�?ИЙ ПО ДЕЙСТВУЮЩИМ КО�?ТР�?КТ�?М, ДЕЛИКТ�?М ИЛИ И�?ОМУ, ВОЗ�?ИКШИМ ИЗ, ИМЕЮЩИМ ПРИЧИ�?ОЙ ИЛИ СВЯЗ�?�?�?ЫМ С ПРОГР�?ММ�?ЫМ ОБЕСПЕЧЕ�?ИЕМ ИЛИ ИСПОЛЬЗОВ�?�?ИЕМ ПРОГР�?ММ�?ОГО ОБЕСПЕЧЕ�?ИЯ ИЛИ И�?ЫМИ ДЕЙСТВИЯМИ С ПРОГР�?ММ�?ЫМ ОБЕСПЕЧЕ�?ИЕМ.'},
                'license5'      : {
                    'en': 'HomeMatic and the HomeMatic Logo are the registered trademarks of eQ-3 AG',
                    'de': 'HomeMatic und das HomeMatic Logo sind eingetragene Warenzeichen der eQ-3 AG',
                    'ru': 'HomeMatic и HomeMatic логотип �?вл�?ют�?�? зареги�?трированными тоговыми марками фирмы eQ-3 Inc.'}
            };
        }
		if (this.words[text]) {
	        var newText = this.words[text][lang];
	        if (newText){
	            return newText;
	        }
	        else 
	        if (lang != 'en') {
	            newText = this.words[text]['en'];
	            if (newText){
	                return newText;
	            }
	        }
	
	    }
	    //console.log ("trans: " + text);
	    return text;
    },
    translateBack: function (text, lang) {
		if (!this.words) {
			// Load words
	        translate ("", lang);
	    }
	    for (var word in this.words) {
	        if (this.words[word] === null)
	            continue;
	        if (this.words[word][lang] == text)
	            return word;
	    }
	
	    //console.log ("back: " + text);
	    return text;
	}
});
