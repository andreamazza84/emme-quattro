<?php
    add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
    function my_theme_enqueue_styles()
    {
        $parenthandle = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
        $theme = wp_get_theme();
        wp_enqueue_style(
            $parenthandle,
            get_template_directory_uri() . '/style.css',
            array(),  // if the parent theme code has a dependency, copy it to here
            $theme->parent()->get('Version')
        );
        wp_enqueue_style(
            'child-style',
            get_stylesheet_uri(),
            array($parenthandle),
            $theme->get('Version') // this only works if you have Version in the style header
        );
    }

// The action callback accepts an WP_User object of our newly registered user in which we can remove_role
// subscriber and add_role author. Now once the plugin is installed we are able to send a POST request to 
// the endpoint http://example.com/wp-json/wp/v2/users/register with the required POST body of username, 
// email and password. Upon successful registration we should see a response from our server

    add_action('wp_rest_user_user_register', 'user_registered');
    function user_registered($user)
    {
        $user->remove_role('subscriber');
        $user->add_role('author');
    }

// We will be hooking into jwt_auth_token_before_dispatch filter so we can add the user’s role to our token
// response. This will be helpful if we want to do permission checks on certain routes in our front-end application 
// to make sure user’s have the correct roles to access those routes.

    add_filter('jwt_auth_token_before_dispatch', 'add_user_role_response', 10, 2);
    function add_user_role_response($data, $user)
    {
        $data['roles'] = $user->roles;
        return $data;
    }