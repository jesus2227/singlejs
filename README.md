# Single.js

SingleJS is a jQuery plugin that makes it easy to create websites with single-page scroll.

## How to use

First you will need the jQuery and [jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/), then you can download the single.js plugin. Once you have done this you will need to create the HTML structure and call the plugin, as in the example below:

```<div id="single">

		<div data-target="home">

		</div>

		<div data-target="skills">
			<a href="#" data-link="contact">Go To Contact</a>
		</div>

		<div data-target="portfolio">
			<img src="img/assassin.jpg" alt="Assassins Creed" data-img="true" width="100%" />
		</div>

		<div data-target="contact">

		</div>

	</div>
```

And you can call the plugin like that:

```<script type="text/javascript">
		$(document).ready(function(){
			$("#single").single();
		});
	</script>
```

The plugin will automatically calculate the window size and create the sections of your website. Notice the ```data-target``` attribute on each child div, the plugin knows that it's a section.

## Creating Links

Using the ```data-link``` attribute on every link, button and etc... you can easily get a scroll effect to the targeted section of your website, see the example bellow:

```<a href="#" data-link="contact">Go To Contact</a>```

The link is pointing to the contact section:

```...
<div data-target="contact">

</div>
...
```