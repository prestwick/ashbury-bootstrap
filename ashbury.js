var ashdoc = (function() {
    var docwrite = '';
    return {
        writenavbar: function() {
        docwrite = document.write('<div class="navbar navbar-default navbar-static-top" role="navigation"><div class="navbar-header"><a class="navbar-brand" href="index.html"><img class="navbar-img" src="docs-assets/ico/ashbury-logo-navbar-narrow-288px.png"/></a><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#ash-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" id="ash-navbar-collapse"><ul class="nav navbar-nav navbar-right ash-navbar"><li><a href="index.html">Parent Cloud</a></li><li><a href="mission.html">Mission</a></li><li><a href="privacy.html">Privacy Policy</a></li></ul></div></div>');
        return docwrite;
        },
        writefooter: function() {
        docwrite = document.write('<footer><p><h4>&copy 2013 Ashbury Mobile Device Management, Inc</h4></p><p><h5><a href="mission.html">Mission</a> | <a href="privacy.html">Privacy</a> | <a href="mailto:careers@ashburymdm.com">Careers</a> | <a href="plan.html">Investors</a></h5></p></footer>');
        return docwrite
        }
    };
}());
