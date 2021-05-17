<template>
  <div id="maps">
    <GmapMap
      :center='center'
      :zoom='15'
      style='width: 100%;  height: 400px;'
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 43.861794756332785, lng: 12.7906404691964 },
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>