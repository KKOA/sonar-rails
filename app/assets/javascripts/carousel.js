$( document ).ready(function() {

  $modal_title = $('.modal-title');
  $modal_desc = $('.modal #description');
  $modal_map_view = $('.modal #map-view');
  $modal_floor_plan = $('.modal #floor-plan');
  $modal_agency = $('.modal #agency');
  $modal_photos = $('.modal #photos');

  $(".props-result").on("click","a",function(event){
    event.preventDefault();
    console.log('-----------------------------')
    url = $(this).attr('href');
    $.ajax({
      type: 'GET',
      url: url,
      success: function(property)
      {
        console.log(property);

        address = property.display_address;
        description = property.short_description;
        coordinates ={
        "lat": property.lat,
        "lng": property.lng
        }
        floorplans = property.floorplans;
        agency = {
        "name": property.agency.agency_name,
        "logo": 'https://mr0.homeflow.co.uk/'+property.agency.agency_logo,
        "url": 'http://'+property.agency.external_domain,
        "tel": property.contact_telephone,
        }
        photos = property.photos;

        // Address
        $modal_title.html(address);
        // Description
        $modal_desc.html(description);

        // Agency
        agency_text =''
        agency_text+= "<p class='text-center'> Interested in this property or have general enquiry, you can contact us on</p>";
        agency_text+= "<div class='agency-contact text-center'>" + agency.tel +"</div>";
        agency_text+= "<p class='text-center'>or click the logo below to vist our site.</p>";
        agency_text+= "<a href='"+ agency.url +"' title='Link to " + agency.name + " homepage ' class='agency-link' target='_blank'>";
        agency_text+= "<div class='text-center sr-only'>" + agency.name + "</div>";
        agency_text+= "<img src='" + agency.logo + "' class='img-responsive'>";
        agency_text+= "</a>";
        $modal_agency.html(agency_text);

        //floorplan
        floorPlanPhotos = 'No floorplan are avaliable for property';
        console.log(floorplans.length);
        if(floorplans.length > 0)
        {
          floorPlanPhotos = "<ul class='list-inline'>";
          floorplans.forEach(function(floorplan, index){
            // console.log(floorplan);
            FloorPlanSrc='https://mr0.homeflow.co.uk/';
            FloorPlanSrc += floorplan.image;

            floorPlanPhotos += "<li>";
            floorPlanPhotos += "<img src='" + FloorPlanSrc + "' class='img-responsive img-rounded'>";
            floorPlanPhotos += "</li>";
          })
          floorPlanPhotos += "</ul>";

        }
        $('#floor-plan .col-xs-12').html(floorPlanPhotos);

        //photo
        photosCarousel = 'No images avaliable for property';
        if(photos.length > 0)
        {
          photosCarousel = '';
          thumbnailPhotos = '';
          fullsizePhotos = '';
          photos.forEach(function(photo, index){
            thumbnailPhotoSrc = 'https://mr0.homeflow.co.uk/';
            thumbnailPhotoSrc += photo;

            fullSizePhotoSrc = thumbnailPhotoSrc.replace(/120x90/g,'640x480');

            // Fullsize image
            active = ''
            if(index == 0){ active ='active'; }
            fullsizePhotos += "<div class='" + active +" item' data-slide-number='" + index + "'>";
            fullsizePhotos += "<img src='" + fullSizePhotoSrc + "' class='img-responsive'>";
            fullsizePhotos += "</div>";

            //thumbnails
            selected =''
            if(index == 0) { selected ='selected'; }
            thumbnailPhotos += "<li>";
            thumbnailPhotos +=   "<a id='carousel-selector-" + index + "' class='"+selected+"'>";
            thumbnailPhotos +=     "<div class='slider-navigation'>";
            thumbnailPhotos +=        "<img src='" + thumbnailPhotoSrc + "' class='img-responsive img-rounded'>";
            thumbnailPhotos +=     "</div>";
            thumbnailPhotos +=   "</a>";
            thumbnailPhotos += "</li>";
          })

          photosCarousel += "<div class='col-xs-12' id='slider'>";
            photosCarousel += "<div class='col-xs-12' id='carousel-bounding-box'>";
              // main slider carousel
              photosCarousel += "<div id='myCarousel' class='carousel slide' data-interval='false'>";
                // main slider carousel items
                photosCarousel += "<div class='carousel-inner'>";
                photosCarousel += fullsizePhotos;
                photosCarousel += "</div>";
                 //main slider carousel nav controls
                photosCarousel += "<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>";
                  photosCarousel += "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>";
                  photosCarousel += "<span class='sr-only'>Previous</span>";
                photosCarousel += "</a>";
                photosCarousel += "<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'>";
                  photosCarousel += "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>";
                  photosCarousel += "<span class='sr-only'>Next</span>";
                photosCarousel += "</a>";
              photosCarousel += "</div>";
            photosCarousel += "</div>";

          photosCarousel += "</div>";
          //main slider carousel
          //thumb navigation carousel
          photosCarousel += "<div class='col-xs-12' id='slider-thumbs'>";
            // thumb navigation carousel items
            photosCarousel += "<ul class='list-inline'>";
              photosCarousel += thumbnailPhotos;
            photosCarousel += "</ul>";
          photosCarousel += "</div>";
        }
        $('#photoCarousel').html(photosCarousel);

        //Open Modal
        $('.modal').modal('show');
//
      }// end of success
    });


  });

});
