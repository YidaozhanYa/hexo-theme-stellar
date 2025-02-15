/**
 * https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#customize-html
 */

'use strict';

var util = require('hexo-util');

hexo.extend.helper.register('popular_posts_wrapper', function(args){
  const title = args.title;
  const json = args.json.json;
  const cls = args.json.class;
  if (json == undefined || json.length == 0) {
    return '';
  }
  const cfg = hexo.theme.config.article.related_posts;
  if (cfg.enable != true) return;
  var returnHTML = "";
  var div = `
    <section class='header'>
      <div class='title cap theme'>${title}</div>
    </section>
    <section class='body'>
    `;

  const posts = this.site.posts;
  const root = this.config.root;
  function listItem(obj){

    var el = '';
    el += '<a class="item" href="' + obj.path + '" title="' + obj.title + '">';
    var p = posts.filter(function(p) {
      return root + p.path == obj.path;
    });
    if (p && p.length > 0) {
      p = p.data[0];
    }
      el += '<span class="title">' + obj.title + '</span>';
      el += '<span class="excerpt">';
      var exl = "";
    if (obj.excerpt) {
      exl = util.stripHTML(obj.excerpt);
    } else if (obj.description) {
      exl = obj.description;
    } else {
      exl = util.truncate(util.stripHTML(p.content), {length: 120});
    }
    if (exl.charCodeAt(0) == 10) {
      el += "此文暂无简介\n<br><br><br>";
    } else {
      el += exl;
    }
    el += '</span>';
    //if (list.excerpt && list.excerpt.length > 0) {
//      el += '<span class="excerpt">' + util.truncate(util.stripHTML(list.excerpt), {length: 120}) + '</span>';
    //}

    el +=  '</a>';
    return el;
  }

  if (json.length > 0) {
      for(var i = 0; i < json.length; i++) {
        returnHTML += listItem(json[i]);
      }
  }

  if (returnHTML != "") returnHTML = "<div class=\"" + cls + "\">" + returnHTML + "</div>";
  div += returnHTML;
  div += '</section>';
  return div;
});
