<?php

namespace Magento\CustomWidget\Block\widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class VideoPlayer extends Template implements BlockInterface
{
    protected $_template = "widget/video_player.phtml";

    public function getVideoUrl(){
        return $this->getData('url');
    }
}

