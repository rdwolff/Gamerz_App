
orginele code voor persistent toolbar
$(function() {
            $( "[data-role='navbar']" ).navbar();
            $( "[data-role='footer']" ).toolbar();
      //orginele regel: $( "[data-role='header'], [data-role='footer']" ).toolbar();
        });
        // Update the contents of the toolbars
        $( document ).on( "pagecontainerchange", function() {
            // Each of the four pages in this demo has a data-title attribute
            // which value is equal to the text of the nav button
            // For example, on first page: <div data-role="page" data-title="Info">
            var current = $( ".ui-page-active" ).jqmData( "title" );
            // Change the heading
            $( "[data-role='header'] h1" ).text( current );
            // Remove active class from nav buttons
            $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
            // Add active class to current nav button
            $( "[data-role='navbar'] a" ).each(function() {
                if ( $( this ).text() === current ) {
                    $( this ).addClass( "ui-btn-active" );
                }
            });
        });


originele footer per pagina
<div data-role="footer" data-position="fixed" data-theme="d">
            <div data-role="navbar" data-mini="true" ui-state-persist>
                <ul>
                    <li><a href="#profile" data-icon="user">Profile</a></li>
                    <li><a href="#page2" data-icon="comment">Chat</a></li>
                    <li><a href="#settings" data-icon="gear">Settings</a></li>
                </ul>
            </div><!-- navbar -->
        </div><!-- footer -->

oplossing voor het niet meer verdwijnen van de footer en header.
        data-tap-toggle="false"  
        data-fullscreen="true"