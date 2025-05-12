<script setup>
// ======================================== Script area start =======================================================

// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
<!-- 000000000000000000000000000000000000000000000000000000 Template area end  000000000000000000000000000000000000000000 -->
</template>






<style scoped>

/* ============================================== Style area start ======================================= */

.menu-container {
            position: relative;
            display: inline-block;
            margin: 20px;
        }

        .menu-button {
            padding: 10px 20px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .menu-list {
            position: absolute;
            top: 100%;
            left: 0;
            list-style: none;
            padding: 0;
            margin: 5px 0;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 4px;
            min-width: 150px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .menu-list.active {
            opacity: 1;
            visibility: visible;
        }

        .menu-list li {
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
            transition: background-color 0.2s;
        }

        .menu-list li:last-child {
            border-bottom: none;
        }

        .menu-list li:hover {
            background-color: #f5f5f5;
        }

        .menu-list a {
            text-decoration: none;
            color: #333;
        }
/* ============================================== Style area end ======================================= */
</style>