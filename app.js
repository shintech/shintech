_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var NavbarView = Backbone.View.extend({
  tagName: 'nav',
  initialize: function(options){
    this.router = options.router
  },
  events: {
    'click #homeButton': "navigateHome",
    'click #servicesButton': 'navigateServices',
    'click #contactsButton': 'navigateContacts'
  },
  template: _.template($("#navbarTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  navigateHome: function(){
    this.router.navigate('', { trigger: true })
  },
  navigateServices: function(){
    this.router.navigate('services', { trigger: true })
  },
  navigateContacts: function(){
    this.router.navigate('contacts', { trigger: true })
  }
});

var HomeView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#homeTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ServicesView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#servicesTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ContactView = Backbone.View.extend({
  tagName: 'p',
  template: _.template($("#contactTemplate").html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var Post = Backbone.Model.extend({
});

var Posts = Backbone.Collection.extend({
  model: Post
});

var PostView = Backbone.View.extend({
  tagName: 'article',
  template: _.template($('#postTemplate').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var PostsView = Backbone.View.extend({
  render: function(){
    this.collection.each(this.addPost, this);
    return this;
  },
  addPost: function(post){
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el)
  }
});

var ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'services': 'services',
    'contacts': 'contacts'
  },
  home: function(){
    var homeView = new HomeView;
    var posts = new Posts([
      {
      title: 'testPost',
      content: 'this is a test post'
      }
    ]);
    var testPostView = new PostsView({collection: posts});
    $('#main').html(homeView.render().el);
    $('#main').append(testPostView.render().el)
  },
  services: function(){
    var servicesView = new ServicesView;
    $('#main').html(servicesView.render().el);
  },
  contacts: function(){
    var contactView = new ContactView;
    $('#main').html(contactView.render().el);
  }
});

$(function(){
  var applicationRouter = new ApplicationRouter
  var navbarView = new NavbarView({ router: applicationRouter });
  $('#navbar').html(navbarView.render().el);
  Backbone.history.start()
});
