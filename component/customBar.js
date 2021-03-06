/*
    Monya - The easiest cryptocurrency wallet
    Copyright (C) 2017-2018 MissMonacoin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
module.exports = require("../js/lang.js")({
  ja: require("./ja/customBar.html"),
  en: require("./en/customBar.html")
})({
  data() {
    return {};
  },
  methods: {
    menuOpen() {
      this.$store.commit("openSide", true);
    }
  },
  store: require("../js/store.js"),
  computed: {
    mod() {
      return this.modifier;
    }
  },
  props: ["title", "menu", "modifier"]
});
