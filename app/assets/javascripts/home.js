$(document).ready(function(){

  function is_bigger(element1, element2)
  {
    if(element1.val() < element2.val()){ return true; }
    return false;
  }
  function match_values(element1, element2)
  {
    if(!(is_blank($max_bedrooms))){ element1.val(element2.val()); }
  }

  function is_blank(element)
  {
    if(element.val() == ''){ return true; }
    return false;
  }

  // Form fields
  $channel = $('#channel');
  $min_bedrooms = $('#min_bedrooms');
  $max_bedrooms = $('#max_bedrooms');
  $location = $('#location');
  $props_result = $('.props-result');

  // prevent min bedrooms exceed min price
  $min_bedrooms.bind('keyup mouseup', function () {
      $this = $(this);
      console.log('min :' + $min_bedrooms.val());
      console.log('max :' + $max_bedrooms.val());
      if(is_bigger($max_bedrooms, $this) && !(is_blank($max_bedrooms))/**/)
      {
        match_values($max_bedrooms, $this)
      }
  });

  $max_bedrooms.bind('keyup mouseup', function () {
      $this = $(this);
      console.log('min :' + $min_bedrooms.val());
      console.log('max :' + $max_bedrooms.val());
      if(is_bigger($this, $min_bedrooms) && !(is_blank($min_bedrooms)))
      {
        match_values($min_bedrooms, $this)
      }
  });



  //
  $('#search-btn').click(function(){
    event.preventDefault();
    console.log('click');

    criteria = {
      channel: $channel.val(),
      min_bedrooms: $min_bedrooms.val(),
      max_bedrooms: $max_bedrooms.val(),
      location: $location.val()
    }

    //Ajax
    $.ajax({
      type: 'GET',
      url: '/search',
      data: criteria,
      success: function(properties)
      {
        console.log(properties);
        console.log(properties.length);
        result =''
        if(properties.length <= 0)
        {
          result = '<p><strong>';
          result += 'Sorry, we could not find any properties matching your criterias. Try widenning your search criteria.'
          result += '</strong></p>';
        }
        else {
          output =''
          properties.forEach(function(property) {
            console.log(property);
            // property_photos = property.photo[0]
            price = property.price_value;
            channel = property.primary_channel;

            // price = accounting.formatMoney(price, "£", 2, ",", ".");

            address = property.display_address;
            console.log(price);
            // res
            result +="<div class='col-md-5 col-sm-offset-center-1 property'>";
            // result +='<p>Price : ' + price + '</p>';
            console.log('channel : '+channel);
            result +='<p class="prop-address">'+address+'</p>';
            result +='<p class="prop-price">';
            if(channel === 'lettings')
            {
              result += accounting.formatMoney(price, "£", 2, ",", ".") +' pcm ';
            }
            else
            {
              result += property.price;
            }
            result += '</p>'


            console.log(property.status);


            result +='</div>';

          });

        }
        $props_result.html('');
        $props_result.append(result);

        // $.each(properties,function(i,property))
        // {
        //   $props_result.append('<div>'+property.property_id+'</div>');
        // }
      }
    });
    //
  });

  //
});
