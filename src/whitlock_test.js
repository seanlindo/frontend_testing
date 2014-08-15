casper.test.begin('Checks to see if the join form is working', 7, function suite(test) {
    casper.start("http://careers.whitlock.com", function() {
        test.assertTitle("Whitlock", "The homepage title is correct");
        test.assertExists('#home > section.sec-hero.pos-rel > header > section > nav > a.pos-abs.btn-join-tn', "There is a Join button on the homepage");

	//Accepts CSS3 selectors by default -- easy way is right clicking in chrome, inspecting element, right clicking the html, then 'Copy CSS Path'
	this.click('#home > section.sec-hero.pos-rel > header > section > nav > a.pos-abs.btn-join-tn');
    });

    //Example showing off positive case testing	
    casper.then(function() {
        test.assertTitle("Join Our Talent Network | Whitlock", "Join page title is correct");
	test.assertExists('#form_tn', "Join form is present");
        test.assertUrlMatch(/join.php/, "We're on the Join Form Page"); //This will be more useful when you check SEO things that should be in the URL
	this.click('#form_tn');
    });

    //Example showing off negative case testing
    casper.then(function() {
	this.capture('bad_joinform_fill', undefined, { format: 'jpg', quality: 100 });
	test.assertUrlMatch(/join.php/, "We didnt fill anything out and should be on the same page");
	test.assertExists('#form_tn > article > ul', "We should be showing the user a negative indication");
    });

    //Inform the test framework that we're finishing
    casper.run(function() {
        test.done();
    });
});
