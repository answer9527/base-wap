<template>
  <div>
    <div class="classic_header flex-x flex-x-between flex-y-center">
      <v-epsoide :createTime="classicData.createTime"/>
      <v-like :like_count="classicData.like_count" :like_status="classicData.like_status"/>
    </div>
    <v-music :image="classicData.image" :url="classicData.url" :intro="classicData.intro"/>
    <!-- <v-movie />
    <v-essay />
    <v-navi /> -->
  </div>
</template>

<script>
import { ClassicModel } from "@/model/classic.js";
import Epsoide from "@/components/classic/epsoide";
import Like from "@/components/classic/like";
import Music from "@/components/classic/music";
import Movie from "@/components/classic/movie";
import Essay from "@/components/classic/essay";
import Navi from "@/components/classic/navi";
export default {
  name: "Classic",
  data() {
    return {
        classicData:{}
    };
  },
  components: {
    "v-epsoide": Epsoide,
    "v-like": Like,
    "v-music": Music,
    "v-movie": Movie,
    "v-essay": Essay,
    "v-navi": Navi,
  },
  methods: {
    get_latest_classic() {
      ClassicModel.getLatest({}).then((res) => {
          this.classicData = res.data
      });
    },
  },
  created() {
    this.get_latest_classic();
  },
};
</script>

<style scoped="scoped">
.classic_header{
    padding: 0.2rem 0;
}
</style>